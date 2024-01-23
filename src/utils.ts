import { Library } from '../types/elm/library'
import path from 'path'
import fs from 'fs'

export interface DefsByTag {
  [tag: string]: string[]
}

export interface ContextsByTag {
  [tag: string]: fhir4.Bundle[]
}

/** 
 * Returns a list of ELM definitions by data tag
 * 
 * @param library ELM Library
 * @returns Hash of ELM definitions by data tag
 */
export const defsByTag = (library: Library): DefsByTag => {
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

export const contextsByTag = (contexts: fhir4.Bundle[]) => contexts.reduce(
  (acc, context) => {
    context.meta?.tag?.forEach(tag => {
      if (tag.code) {
        if (!acc[tag.code]) { 
          acc[tag.code] = []
        }
        acc[tag.code].push(context)
      }
    })
    return acc
  },
  {} as ContextsByTag
)

export const loadFile = <T>(name: string): T => {
  let filename = path.resolve(path.join(__dirname, '..', name))

  if (!name.endsWith('json')) {
    filename += '.json'
  }

  return JSON.parse(fs.readFileSync(filename).toString()) as any as T
}