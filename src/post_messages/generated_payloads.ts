/**
 * This file is auto-generated by generate_payloads.ts, DO NOT EDIT.
 *
 * If you need to make changes to the code in this file, you can do so by
 * modifying definitions.yml.
 */
import { Type } from "./generated_types"

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
  initial_step: string
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

export type ConnectOauthErrorPayload = {
  type: Type.ConnectOauthError
  user_guid: string
  session_guid: string
  member_guid: string
}

export type ConnectOauthRequestedPayload = {
  type: Type.ConnectOauthRequested
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

export type AccountCreatedPayload = {
  type: Type.AccountCreated
  guid: string
}

export type GenericPayload
  = LoadPayload
  | PingPayload

export type EntityPayload
  = AccountCreatedPayload

export type WidgetPayload
  = ConnectLoadedPayload
  | ConnectEnterCredentialsPayload
  | ConnectInstitutionSearchPayload
  | ConnectSelectedInstitutionPayload
  | ConnectMemberConnectedPayload
  | ConnectMemberDeletedPayload
  | ConnectCreateMemberErrorPayload
  | ConnectMemberStatusUpdatePayload
  | ConnectOauthErrorPayload
  | ConnectOauthRequestedPayload
  | ConnectStepChangePayload
  | ConnectSubmitMFAPayload
  | ConnectUpdateCredentialsPayload

export type Payload
  = GenericPayload
  | EntityPayload
  | WidgetPayload

type Value = string | number
type NestedValue = Record<string, Value>
type Metadata = Record<string, Value | NestedValue>

export function buildPayload(type: Type, metadata: Metadata): Payload {
  switch (type) {
    case Type.Load:
      return {
        type,
      }

    case Type.Ping:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
      }

    case Type.ConnectLoaded:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        initial_step: metadata.initial_step as string,
      }

    case Type.ConnectEnterCredentials:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        institution: metadata.institution as { code: string, guid: string },
      }

    case Type.ConnectInstitutionSearch:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        query: metadata.query as string,
      }

    case Type.ConnectSelectedInstitution:
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
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
      }

    case Type.ConnectMemberDeleted:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
      }

    case Type.ConnectCreateMemberError:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        institution_guid: metadata.institution_guid as string,
        institution_code: metadata.institution_code as string,
      }

    case Type.ConnectMemberStatusUpdate:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
        connection_status: metadata.connection_status as number,
      }

    case Type.ConnectOauthError:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
      }

    case Type.ConnectOauthRequested:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        url: metadata.url as string,
      }

    case Type.ConnectStepChange:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        previous: metadata.previous as string,
        current: metadata.current as string,
      }

    case Type.ConnectSubmitMFA:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
      }

    case Type.ConnectUpdateCredentials:
      return {
        type,
        user_guid: metadata.user_guid as string,
        session_guid: metadata.session_guid as string,
        member_guid: metadata.member_guid as string,
        institution: metadata.institution as { code: string, guid: string },
      }

    case Type.AccountCreated:
      return {
        type,
        guid: metadata.guid as string,
      }

    default:
      throw new Error(`unknown post message type: ${type}`)
  }
}
