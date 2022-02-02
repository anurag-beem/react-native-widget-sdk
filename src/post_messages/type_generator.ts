import { join, basename } from "path"

import {
  genMessageKey,
  genMessageType,
  merge,
  withEachMessageDefinition,
  write,
} from "./generator_utils"

const template = `
/**
 * This file is auto-generated by {filename}, DO NOT EDIT.
 */

export enum Type {
{typeDefLines}
}

export const typeLookup: Record<string, Type> = {
{typeMapLines}
}
`

const main = () => {
  console.log("Generating type definitions")

  const typeDefLines: string[] = []
  const typeMapLines: string[] = []

  withEachMessageDefinition((namespace, action, defn) => {
    console.log(`  - Generating post message type definition for "${namespace}/${action}" event`)

    const key = genMessageKey(namespace, action)
    const type = genMessageType(namespace, action)
    typeDefLines.push(`  ${key} = "${type}",`)
    typeMapLines.push(`  [Type.${key}]: Type.${key},`)
  })

  const code = merge(template, {
    typeDefLines: typeDefLines.join("\n"),
    typeMapLines: typeMapLines.join("\n"),
    filename: basename(__filename),
  })

  const dest = join(__dirname, "./generated_type.ts")
  write(dest, code)

  console.log("Done generating type definitions")
}

main()
