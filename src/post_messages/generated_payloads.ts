/**
 * This file is auto-generated by generate_payloads.ts, DO NOT EDIT.
 *
 * If you need to make changes to the code in this file, you can do so by
 * modifying definitions.yml.
 */
import { Type } from "./generated_types"

// This is an internal error. Throw when we are decoding a post message's
// metadata and we encourntered a missing field or an invalid value. This
// likely means there has been a change to the definition of a post message
// that we do not know about.
export class PostMessageFieldDecodeError extends Error {
  public messageType: string
  public field: string
  public expectedType: TypeDef
  public gotValue: unknown

  constructor(messageType: string, field: string, expectedType: TypeDef, gotValue: unknown) {
    super(`Unable to decode '${field}' from '${messageType}'`)

    this.messageType = messageType
    this.field = field
    this.expectedType = expectedType
    this.gotValue = gotValue

    Object.setPrototypeOf(this, PostMessageFieldDecodeError.prototype);
  }
}

export type LoadPayload = {
  type: Type.Load
}

export type PingPayload = {
  type: Type.Ping
  user_guid: string
  session_guid: string
}

export type ConnectLoadedPayload = {
  type: Type.ConnectLoaded
  user_guid: string
  session_guid: string
  initial_step: "search" | "selectMember" | "enterCreds" | "mfa" | "connected" | "loginError" | "disclosure"
}

export type ConnectEnterCredentialsPayload = {
  type: Type.ConnectEnterCredentials
  user_guid: string
  session_guid: string
  institution: { code: string, guid: string }
}

export type ConnectInstitutionSearchPayload = {
  type: Type.ConnectInstitutionSearch
  user_guid: string
  session_guid: string
  query: string
}

export type ConnectSelectedInstitutionPayload = {
  type: Type.ConnectSelectedInstitution
  user_guid: string
  session_guid: string
  code: string
  guid: string
  name: string
  url: string
}

export type ConnectMemberConnectedPayload = {
  type: Type.ConnectMemberConnected
  user_guid: string
  session_guid: string
  member_guid: string
}

export type ConnectConnectedPrimaryActionPayload = {
  type: Type.ConnectConnectedPrimaryAction
  user_guid: string
  session_guid: string
}

export type ConnectMemberDeletedPayload = {
  type: Type.ConnectMemberDeleted
  user_guid: string
  session_guid: string
  member_guid: string
}

export type ConnectCreateMemberErrorPayload = {
  type: Type.ConnectCreateMemberError
  user_guid: string
  session_guid: string
  institution_guid: string
  institution_code: string
}

export type ConnectMemberStatusUpdatePayload = {
  type: Type.ConnectMemberStatusUpdate
  user_guid: string
  session_guid: string
  member_guid: string
  connection_status: number
}

export type ConnectOAuthErrorPayload = {
  type: Type.ConnectOAuthError
  user_guid: string
  session_guid: string
  member_guid: string
}

export type ConnectOAuthRequestedPayload = {
  type: Type.ConnectOAuthRequested
  user_guid: string
  session_guid: string
  url: string
}

export type ConnectStepChangePayload = {
  type: Type.ConnectStepChange
  user_guid: string
  session_guid: string
  previous: string
  current: string
}

export type ConnectSubmitMFAPayload = {
  type: Type.ConnectSubmitMFA
  user_guid: string
  session_guid: string
  member_guid: string
}

export type ConnectUpdateCredentialsPayload = {
  type: Type.ConnectUpdateCredentials
  user_guid: string
  session_guid: string
  member_guid: string
  institution: { code: string, guid: string }
}

export type PulseLoadPayload = {
  type: Type.PulseLoad
  user_guid: string
}

export type PulseOverdraftWarningCtaTransferFundsPayload = {
  type: Type.PulseOverdraftWarningCtaTransferFunds
  account_guid: string
  amount: number
}

export type AccountCreatedPayload = {
  type: Type.AccountCreated
  guid: string
}

export type GenericPayload =
  | LoadPayload
  | PingPayload

export type EntityPayload =
  | AccountCreatedPayload

export type WidgetPayload =
  | ConnectLoadedPayload
  | ConnectEnterCredentialsPayload
  | ConnectInstitutionSearchPayload
  | ConnectSelectedInstitutionPayload
  | ConnectMemberConnectedPayload
  | ConnectConnectedPrimaryActionPayload
  | ConnectMemberDeletedPayload
  | ConnectCreateMemberErrorPayload
  | ConnectMemberStatusUpdatePayload
  | ConnectOAuthErrorPayload
  | ConnectOAuthRequestedPayload
  | ConnectStepChangePayload
  | ConnectSubmitMFAPayload
  | ConnectUpdateCredentialsPayload
  | PulseLoadPayload
  | PulseOverdraftWarningCtaTransferFundsPayload

export type Payload =
  | GenericPayload
  | EntityPayload
  | WidgetPayload

type Value = string | number
type NestedValue = Record<string, Value>
type Metadata = Record<string, Value | NestedValue>
type TypeDef = string | Array<string> | Record<string, string>

function assertMessageProp(container: Metadata, postMessageType: string, field: string, expectedType: TypeDef) {
  const value = container[field]

  const valueIsDefined = typeof value !== "undefined"
  const valueIsString = typeof value === "string"
  const valueIsNumber = typeof value === "number"
  const valueIsObject = typeof value === "object" && !Array.isArray(value)

  const typeIsString = expectedType === "string"
  const typeIsNumber = expectedType === "number"
  const typeIsArray = expectedType instanceof Array
  const typeIsObject = typeof expectedType === "object" && !Array.isArray(expectedType)

  if (!valueIsDefined) {
    throw new PostMessageFieldDecodeError(postMessageType, field, expectedType, value)
  } else if (typeIsString && !valueIsString) {
    throw new PostMessageFieldDecodeError(postMessageType, field, expectedType, value)
  } else if (typeIsNumber && !valueIsNumber) {
    throw new PostMessageFieldDecodeError(postMessageType, field, expectedType, value)
  } else if (typeIsArray && !(valueIsString && expectedType.includes(value))) {
    throw new PostMessageFieldDecodeError(postMessageType, field, expectedType, value)
  } else if (typeIsObject && !valueIsObject) {
    throw new PostMessageFieldDecodeError(postMessageType, field, expectedType, value)
  } else if (typeIsObject && valueIsObject) {
    Object.keys(expectedType).forEach((field) => {
      assertMessageProp(value, postMessageType, field, expectedType[field])
    })
  }
}

export function buildPayload(type: Type, metadata: Metadata): Payload {
  switch (type) {
    case Type.Load:
      return {
        type,
      }

    case Type.Ping:
      assertMessageProp(metadata, "mx/ping", "user_guid", "string")
      assertMessageProp(metadata, "mx/ping", "session_guid", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
      }

    case Type.ConnectLoaded:
      assertMessageProp(metadata, "mx/connect/loaded", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/loaded", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/loaded", "initial_step", ["search", "selectMember", "enterCreds", "mfa", "connected", "loginError", "disclosure"])

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        initial_step: metadata.initial_step as "search" | "selectMember" | "enterCreds" | "mfa" | "connected" | "loginError" | "disclosure",
      }

    case Type.ConnectEnterCredentials:
      assertMessageProp(metadata, "mx/connect/enterCredentials", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/enterCredentials", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/enterCredentials", "institution", { code: "string", guid: "string" })

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        institution: metadata.institution as { code: string, guid: string },
      }

    case Type.ConnectInstitutionSearch:
      assertMessageProp(metadata, "mx/connect/institutionSearch", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/institutionSearch", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/institutionSearch", "query", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        query: metadata.query as string,
      }

    case Type.ConnectSelectedInstitution:
      assertMessageProp(metadata, "mx/connect/selectedInstitution", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/selectedInstitution", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/selectedInstitution", "code", "string")
      assertMessageProp(metadata, "mx/connect/selectedInstitution", "guid", "string")
      assertMessageProp(metadata, "mx/connect/selectedInstitution", "name", "string")
      assertMessageProp(metadata, "mx/connect/selectedInstitution", "url", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        code: metadata.code as string,
        guid: metadata.guid as string,
        name: metadata.name as string,
        url: metadata.url as string,
      }

    case Type.ConnectMemberConnected:
      assertMessageProp(metadata, "mx/connect/memberConnected", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/memberConnected", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/memberConnected", "member_guid", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
      }

    case Type.ConnectConnectedPrimaryAction:
      assertMessageProp(metadata, "mx/connect/connected/primaryAction", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/connected/primaryAction", "session_guid", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
      }

    case Type.ConnectMemberDeleted:
      assertMessageProp(metadata, "mx/connect/memberDeleted", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/memberDeleted", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/memberDeleted", "member_guid", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
      }

    case Type.ConnectCreateMemberError:
      assertMessageProp(metadata, "mx/connect/createMemberError", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/createMemberError", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/createMemberError", "institution_guid", "string")
      assertMessageProp(metadata, "mx/connect/createMemberError", "institution_code", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        institution_guid: metadata.institution_guid as string,
        institution_code: metadata.institution_code as string,
      }

    case Type.ConnectMemberStatusUpdate:
      assertMessageProp(metadata, "mx/connect/memberStatusUpdate", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/memberStatusUpdate", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/memberStatusUpdate", "member_guid", "string")
      assertMessageProp(metadata, "mx/connect/memberStatusUpdate", "connection_status", "number")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
        connection_status: metadata.connection_status as number,
      }

    case Type.ConnectOAuthError:
      assertMessageProp(metadata, "mx/connect/oauthError", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/oauthError", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/oauthError", "member_guid", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
      }

    case Type.ConnectOAuthRequested:
      assertMessageProp(metadata, "mx/connect/oauthRequested", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/oauthRequested", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/oauthRequested", "url", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        url: metadata.url as string,
      }

    case Type.ConnectStepChange:
      assertMessageProp(metadata, "mx/connect/stepChange", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/stepChange", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/stepChange", "previous", "string")
      assertMessageProp(metadata, "mx/connect/stepChange", "current", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        previous: metadata.previous as string,
        current: metadata.current as string,
      }

    case Type.ConnectSubmitMFA:
      assertMessageProp(metadata, "mx/connect/submitMFA", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/submitMFA", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/submitMFA", "member_guid", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
      }

    case Type.ConnectUpdateCredentials:
      assertMessageProp(metadata, "mx/connect/updateCredentials", "user_guid", "string")
      assertMessageProp(metadata, "mx/connect/updateCredentials", "session_guid", "string")
      assertMessageProp(metadata, "mx/connect/updateCredentials", "member_guid", "string")
      assertMessageProp(metadata, "mx/connect/updateCredentials", "institution", { code: "string", guid: "string" })

      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
        institution: metadata.institution as { code: string, guid: string },
      }

    case Type.PulseLoad:
      assertMessageProp(metadata, "mx/pulse/load", "user_guid", "string")

      return {
        type,
        user_guid: metadata.user_guid as string,
      }

    case Type.PulseOverdraftWarningCtaTransferFunds:
      assertMessageProp(metadata, "mx/pulse/overdraftWarning/cta/transferFunds", "account_guid", "string")
      assertMessageProp(metadata, "mx/pulse/overdraftWarning/cta/transferFunds", "amount", "number")

      return {
        type,
        account_guid: metadata.account_guid as string,
        amount: metadata.amount as number,
      }

    case Type.AccountCreated:
      assertMessageProp(metadata, "mx/account/created", "guid", "string")

      return {
        type,
        guid: metadata.guid as string,
      }

    default:
      throw new Error(`unknown post message type: ${type}`)
  }
}
