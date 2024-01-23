import { Library } from '../types/elm/library'
import { ContextsByTag, contextsByTag, defsByTag, loadFile } from './utils'

const templateLibrary = (
  elm: Library,
  contextsByTag: ContextsByTag,
  cqlResults: any
) => {
  return `
const cqlResults = ${JSON.stringify(cqlResults)}
describe("Library: ${elm?.library?.identifier?.id}", () => {
  ${Object.keys(defsByTag(elm))
    ?.map((key) => templateTest(defsByTag(elm)[key], contextsByTag[key]))
    ?.join('')}
})`
}

const templateTest = (defs: string[], contexts: fhir4.Bundle[] = []) => `
  ${defs
    ?.map(
      (def) => `
      ${contexts
        ?.map(
          (context) => `
        test("'${def}' for ${context.id} is true", () => {
          if (${context.id}) {
            const value = cqlResults["${context.id}"]["${def}"]
            assert.equal(value, true)
          }
        })`
        )
        .join('')}
      `
    )
    ?.join('')}`

export const testFactory = () => {
  const elm = loadFile<Library>('../cql-generated/simpleLibraryUnitTest.json')
  const patientData1 = loadFile<fhir4.Bundle>(
    '../fsh-generated/resources/Bundle-TestData1.json'
  )
  const patientData2 = loadFile<fhir4.Bundle>(
    '../fsh-generated/resources/Bundle-TestData2.json'
  )

  console.log(
    templateLibrary(elm, contextsByTag([patientData1, patientData2]), {})
  )
}

testFactory()
