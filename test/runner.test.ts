import path from 'path'
import fs from 'fs'
import { Library } from '../types/elm/library'
import cql from 'cql-execution'
import cqlfhir from 'cql-exec-fhir'

const executeCql = (
  primaryLibrary: Library,
  libraries: { [name: string]: Library },
  data: fhir4.Bundle[]
) => {
  const library = new cql.Library(primaryLibrary, new cql.Repository(libraries))
  const executor = new cql.Executor(library)

  const patientSource = cqlfhir.PatientSource.FHIRv401()
  patientSource.loadBundles(data)

  const result = executor.exec(patientSource)
  return result.patientResults
}

const loadFile = <T>(name: string): T => {
  let filename = path.resolve(path.join(__dirname, '..', name))

  if (!name.endsWith('json')) {
    filename += '.json'
  }

  return JSON.parse(fs.readFileSync(filename).toString()) as any as T
}

interface PatientsByTag {
  [tag: string]: fhir4.FhirResource[]
}

interface DefsByTag {
  [tag: string]: string[]
}

const defsbByTag = (library: Library): DefsByTag => {
  return (library as any).library?.statements?.def?.reduce(
    (
      acc: { [x: string]: any[] },
      def: { annotation: { t: any[] }[]; name: any }
    ) => {
      def.annotation?.[0]?.t
        ?.filter((t: { name: string; value: string }) => t.name === 'data')
        ?.forEach((t: { name: string; value: string }) => {
          if (!acc[t.value]) {
            acc[t.value] = []
          }
          acc[t.value].push(def.name)
        })
      return acc
    },
    {} as DefsByTag
  )
}

const patientsByTag = (data: fhir4.Bundle[]): PatientsByTag => {
  const patients = data.map(
    (bundle) =>
      bundle.entry?.find((e) => e.resource?.resourceType === 'Patient')
        ?.resource
  )
  return patients.reduce((acc, patient) => {
    const tags = patient?.meta?.tag
    tags?.forEach((t) => {
      if (t.code && patient) {
        if (!acc[t.code]) {
          acc[t.code] = []
        }
        acc[t.code].push(patient)
      }
    })
    return acc
  }, {} as PatientsByTag)
}

describe('Unit Test', () => {
  const elm = loadFile<Library>('cql-generated/simpleLibraryUnitTest.json')
  const libraries = {
    simpleLibrary: loadFile<Library>('cql-generated/simpleLibrary.json')
  }

  const patientData1 = loadFile<fhir4.Bundle>(
    'fsh-generated/resources/Bundle-TestData1.json'
  )
  const patientData2 = loadFile<fhir4.Bundle>(
    'fsh-generated/resources/Bundle-TestData2.json'
  )
  const patientData3 = loadFile<fhir4.Bundle>(
    'fsh-generated/resources/Bundle-TestData3.json'
  )

  const cqlResults = executeCql(elm, libraries, [patientData1, patientData2, patientData3])

  const taggedPatients = patientsByTag([patientData1, patientData2, patientData3])
  const taggedDefs = defsbByTag(elm)

  Object.keys(taggedDefs).forEach((tag) => {
    const patients = taggedPatients[tag]
    const definitions = taggedDefs[tag]

    patients.forEach((patient) => {
      if (definitions) {
        definitions.forEach((def) => {
          test(`"${def}" is true for ${patient.id}`, () => {
            if (patient.id) {
              const value = cqlResults[patient.id][def]
              expect(value).toEqual(true)
            }
          })
        })
      }
    })
  })
})
