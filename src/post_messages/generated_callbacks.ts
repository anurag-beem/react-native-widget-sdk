/**
 * This file is auto-generated by generate_callbacks.ts, DO NOT EDIT.
 *
 * If you need to make changes to the code in this file, you can do so by
 * modifying definitions.yml.
 */
import { WebViewNavigation } from "react-native-webview"

import { Type } from "./generated_types"
import { Message } from "./message"

import {
  LoadPayload,
  PingPayload,
  FocusTrapPayload,
  ConnectLoadedPayload,
  ConnectEnterCredentialsPayload,
  ConnectInstitutionSearchPayload,
  ConnectSelectedInstitutionPayload,
  ConnectMemberConnectedPayload,
  ConnectConnectedPrimaryActionPayload,
  ConnectMemberDeletedPayload,
  ConnectCreateMemberErrorPayload,
  ConnectMemberStatusUpdatePayload,
  ConnectOAuthErrorPayload,
  ConnectOAuthRequestedPayload,
  ConnectStepChangePayload,
  ConnectSubmitMFAPayload,
  ConnectUpdateCredentialsPayload,
  PulseLoadPayload,
  PulseOverdraftWarningCtaTransferFundsPayload,
  AccountCreatedPayload,
} from "./generated_payloads"

export type BaseCallbackProps = {
  onMessage?: (request: WebViewNavigation) => void
  onUnknownMessage?: (request: WebViewNavigation) => void
  onMessageDispatchError?: (request: WebViewNavigation, error: Error) => void
}

export type GenericCallbackProps = {
  onLoad?: (payload: LoadPayload) => void
  onPing?: (payload: PingPayload) => void
  onFocusTrap?: (payload: FocusTrapPayload) => void
}

export type EntityCallbackProps = {
  onAccountCreated?: (payload: AccountCreatedPayload) => void
}

export type ConnectCallbackProps = WidgetPostMessageCallbackProps & {
  onLoaded?: (payload: ConnectLoadedPayload) => void
  onEnterCredentials?: (payload: ConnectEnterCredentialsPayload) => void
  onInstitutionSearch?: (payload: ConnectInstitutionSearchPayload) => void
  onSelectedInstitution?: (payload: ConnectSelectedInstitutionPayload) => void
  onMemberConnected?: (payload: ConnectMemberConnectedPayload) => void
  onConnectedPrimaryAction?: (payload: ConnectConnectedPrimaryActionPayload) => void
  onMemberDeleted?: (payload: ConnectMemberDeletedPayload) => void
  onCreateMemberError?: (payload: ConnectCreateMemberErrorPayload) => void
  onMemberStatusUpdate?: (payload: ConnectMemberStatusUpdatePayload) => void
  onOAuthError?: (payload: ConnectOAuthErrorPayload) => void
  onOAuthRequested?: (payload: ConnectOAuthRequestedPayload) => void
  onStepChange?: (payload: ConnectStepChangePayload) => void
  onSubmitMFA?: (payload: ConnectSubmitMFAPayload) => void
  onUpdateCredentials?: (payload: ConnectUpdateCredentialsPayload) => void
}

export type PulseCallbackProps = WidgetPostMessageCallbackProps & {
  onLoad?: (payload: PulseLoadPayload) => void
  onOverdraftWarningCtaTransferFunds?: (payload: PulseOverdraftWarningCtaTransferFundsPayload) => void
}

// Thrown when we are unable to process an otherwise valid post message
// request. Used to trigger the `onMessageDispatchError` callback.
class CallbackDispatchError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, CallbackDispatchError.prototype);
  }
}

const namespaces = {
  generic: [
    "load",
    "ping",
    "focusTrap",
  ],
  entities: [
    "account",
  ],
}

function isGenericMessage(message: Message) {
  return namespaces.generic.includes(message.namespace)
}

function isEntityMessage(message: Message) {
  return namespaces.entities.includes(message.namespace)
}

function safeCall(args: [], fn?: () => void): void
function safeCall<P1>(args: [P1], fn?: (...args: [P1]) => void): void
function safeCall<P1, P2>(args: [P1, P2], fn?: (...args: [P1, P2]) => void): void
function safeCall<P1, P2, P3>(args: [P1, P2, P3], fn?: (...args: [P1, P2, P3]) => void): void
function safeCall<P1, P2, P3, P4>(args: [P1, P2, P3, P4], fn?: (...args: [P1, P2, P3, P4]) => void): void
function safeCall<P1, P2, P3, P4, P5>(args: [P1, P2, P3, P4, P5], fn?: (...args: [P1, P2, P3, P4, P5]) => void): void
function safeCall<Ps>(args: Ps[], fn?: (...args: Ps[]) => void): void {
  if (fn) {
    fn(...args)
  }
}

export type WidgetPostMessageCallbackProps =
  & BaseCallbackProps
  & GenericCallbackProps
  & EntityCallbackProps

export function handleWidgetRequest(callbacks: WidgetPostMessageCallbackProps, request: WebViewNavigation) {
  safeCall([request], callbacks.onMessage)

  const message = new Message(request.url)
  if (!message.valid) {
    safeCall([request], callbacks.onUnknownMessage)
    return
  }

  try {
    dispatchWidgetCallback(callbacks, message)
  } catch (error) {
    // `CallbackDispatchError` is an internal error so pass that back to the
    // host via the `onMessageDispatchError` callback. Any other errors are
    // from user space and should bubble back up to the host.
    if (error instanceof CallbackDispatchError) {
      safeCall([request, error], callbacks.onMessageDispatchError)
    } else {
      throw error
    }
  }
}

export function dispatchWidgetCallback(callbacks: WidgetPostMessageCallbackProps, message: Message) {
  const payload = message.payload

  if (isGenericMessage(message)) {
    dispatchGenericCallback(callbacks, message)
    return
  } else if (isEntityMessage(message)) {
    dispatchEntityCallback(callbacks, message)
    return
  }

  throw new CallbackDispatchError(`"unable to dispatch post message with unknown type: ${payload.type}"`)
}

export function dispatchGenericCallback(callbacks: GenericCallbackProps, message: Message) {
  const payload = message.payload

  console.log("!!!!!!")
  console.log(payload)
  console.log(payload.type)
  switch (payload.type) {
    case Type.Load:
      safeCall([payload], callbacks.onLoad)
      break

    case Type.Ping:
      safeCall([payload], callbacks.onPing)
      break

    case Type.FocusTrap:
      console.log("CALL")
      safeCall([payload], callbacks.onFocusTrap)
      break

    default:
      throw new CallbackDispatchError(`"unable to dispatch post message with unknown type: ${payload.type}"`)
  }
}

export function dispatchEntityCallback(callbacks: EntityCallbackProps, message: Message) {
  const payload = message.payload

  switch (payload.type) {
    case Type.AccountCreated:
      safeCall([payload], callbacks.onAccountCreated)
      break

    default:
      throw new CallbackDispatchError(`"unable to dispatch post message with unknown type: ${payload.type}"`)
  }
}

export function handleConnectRequest(callbacks: ConnectCallbackProps, request: WebViewNavigation) {
  safeCall([request], callbacks.onMessage)

  const message = new Message(request.url)
  if (!message.valid) {
    safeCall([request], callbacks.onUnknownMessage)
    return
  }

  try {
    dispatchConnectCallback(callbacks, message)
  } catch (error) {
    // `CallbackDispatchError` is an internal error so pass that back to the
    // host via the `onMessageDispatchError` callback. Any other errors are
    // from user space and should bubble back up to the host.
    if (error instanceof CallbackDispatchError) {
      safeCall([request, error], callbacks.onMessageDispatchError)
    } else {
      throw error
    }
  }
}

export function dispatchConnectCallback(callbacks: ConnectCallbackProps, message: Message) {
  const payload = message.payload

  if (isGenericMessage(message)) {
    dispatchGenericCallback(callbacks, message)
    return
  } else if (isEntityMessage(message)) {
    dispatchEntityCallback(callbacks, message)
    return
  }

  switch (payload.type) {
    case Type.ConnectLoaded:
      safeCall([payload], callbacks.onLoaded)
      break

    case Type.ConnectEnterCredentials:
      safeCall([payload], callbacks.onEnterCredentials)
      break

    case Type.ConnectInstitutionSearch:
      safeCall([payload], callbacks.onInstitutionSearch)
      break

    case Type.ConnectSelectedInstitution:
      safeCall([payload], callbacks.onSelectedInstitution)
      break

    case Type.ConnectMemberConnected:
      safeCall([payload], callbacks.onMemberConnected)
      break

    case Type.ConnectConnectedPrimaryAction:
      safeCall([payload], callbacks.onConnectedPrimaryAction)
      break

    case Type.ConnectMemberDeleted:
      safeCall([payload], callbacks.onMemberDeleted)
      break

    case Type.ConnectCreateMemberError:
      safeCall([payload], callbacks.onCreateMemberError)
      break

    case Type.ConnectMemberStatusUpdate:
      safeCall([payload], callbacks.onMemberStatusUpdate)
      break

    case Type.ConnectOAuthError:
      safeCall([payload], callbacks.onOAuthError)
      break

    case Type.ConnectOAuthRequested:
      safeCall([payload], callbacks.onOAuthRequested)
      break

    case Type.ConnectStepChange:
      safeCall([payload], callbacks.onStepChange)
      break

    case Type.ConnectSubmitMFA:
      safeCall([payload], callbacks.onSubmitMFA)
      break

    case Type.ConnectUpdateCredentials:
      safeCall([payload], callbacks.onUpdateCredentials)
      break

    default:
      throw new CallbackDispatchError(`"unable to dispatch post message with unknown type: ${payload.type}"`)
  }
}

export function handlePulseRequest(callbacks: PulseCallbackProps, request: WebViewNavigation) {
  safeCall([request], callbacks.onMessage)

  const message = new Message(request.url)
  if (!message.valid) {
    safeCall([request], callbacks.onUnknownMessage)
    return
  }

  try {
    dispatchPulseCallback(callbacks, message)
  } catch (error) {
    // `CallbackDispatchError` is an internal error so pass that back to the
    // host via the `onMessageDispatchError` callback. Any other errors are
    // from user space and should bubble back up to the host.
    if (error instanceof CallbackDispatchError) {
      safeCall([request, error], callbacks.onMessageDispatchError)
    } else {
      throw error
    }
  }
}

export function dispatchPulseCallback(callbacks: PulseCallbackProps, message: Message) {
  const payload = message.payload

  if (isGenericMessage(message)) {
    dispatchGenericCallback(callbacks, message)
    return
  } else if (isEntityMessage(message)) {
    dispatchEntityCallback(callbacks, message)
    return
  }

  switch (payload.type) {
    case Type.PulseLoad:
      safeCall([payload], callbacks.onLoad)
      break

    case Type.PulseOverdraftWarningCtaTransferFunds:
      safeCall([payload], callbacks.onOverdraftWarningCtaTransferFunds)
      break

    default:
      throw new CallbackDispatchError(`"unable to dispatch post message with unknown type: ${payload.type}"`)
  }
}
