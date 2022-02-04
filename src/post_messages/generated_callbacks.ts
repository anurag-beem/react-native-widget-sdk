/**
 * This file is auto-generated by generate_callbacks.ts, DO NOT EDIT.
 *
 * If you need to make changes to the code in this file, you can do so by
 * modifying definitions.yml.
 */
import { Type } from "./generated_types"
import { Message } from "./message"

import {
  LoadPayload,
  PingPayload,
  ConnectLoadedPayload,
  ConnectSelectedInstitutionPayload,
  ConnectStepChangePayload,
  ConnectEnterCredentialsPayload,
  AccountCreatedPayload,
} from "./generated_payloads"

export type GenericCallback = {
  onLoad?: (payload: LoadPayload) => void
  onPing?: (payload: PingPayload) => void
}

export type EntityCallback = {
  onAccountCreated?: (payload: AccountCreatedPayload) => void
}

export type ConnectCallback = GenericCallback & EntityCallback & {
  onLoaded?: (payload: ConnectLoadedPayload) => void
  onSelectedInstitution?: (payload: ConnectSelectedInstitutionPayload) => void
  onStepChange?: (payload: ConnectStepChangePayload) => void
  onEnterCredentials?: (payload: ConnectEnterCredentialsPayload) => void
}

const namespaces = {
  generic: [
    "load",
    "ping",
  ],
  entities: [
    "account",
  ],
}

function isGenericMessage(message: Message) {
  return namespaces.generic.includes(message.namespace())
}

function isEntityMessage(message: Message) {
  return namespaces.entities.includes(message.namespace())
}

function safeCall<P>(payload: P, fn?: (_: P) => void) {
  if (fn) {
    fn(payload)
  }
}

export function dispatchGenericCallback(callbacks: GenericCallback, message: Message) {
  const payload = message.payload()

  switch (payload.type) {
    case Type.Load:
      safeCall(payload, callbacks.onLoad)
      break

    case Type.Ping:
      safeCall(payload, callbacks.onPing)
      break

    default:
      throw new Error(`"unable to dispatch post message with unknown type: ${payload.type}"`)
  }
}

export function dispatchEntityCallback(callbacks: EntityCallback, message: Message) {
  const payload = message.payload()

  switch (payload.type) {
    case Type.AccountCreated:
      safeCall(payload, callbacks.onAccountCreated)
      break

    default:
      throw new Error(`"unable to dispatch post message with unknown type: ${payload.type}"`)
  }
}

export function handleConnectRequest(callbacks: ConnectCallback, url: string) {
  const message = new Message(url)
  if (!message.isValid()) {
    return
  }

  dispatchConnectCallback(callbacks, message)
}

export function dispatchConnectCallback(callbacks: ConnectCallback, message: Message) {
  const payload = message.payload()

  if (isGenericMessage(message)) {
    dispatchGenericCallback(callbacks, message)
    return
  } else if (isEntityMessage(message)) {
    dispatchEntityCallback(callbacks, message)
    return
  }

  switch (payload.type) {
    case Type.ConnectLoaded:
      safeCall(payload, callbacks.onLoaded)
      break

    case Type.ConnectSelectedInstitution:
      safeCall(payload, callbacks.onSelectedInstitution)
      break

    case Type.ConnectStepChange:
      safeCall(payload, callbacks.onStepChange)
      break

    case Type.ConnectEnterCredentials:
      safeCall(payload, callbacks.onEnterCredentials)
      break

    default:
      throw new Error(`"unable to dispatch post message with unknown type: ${payload.type}"`)
  }
}
