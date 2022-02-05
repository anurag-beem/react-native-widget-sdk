import base64 from "react-native-base64"

import { Environment, Host, lookupEnvironment } from "./environment"
import { Type } from "../widget/widgets"
import { Options } from "../widget/options"

type ExtraOptions<Mode> = Partial<Omit<Options<Mode>, "widget_type">>

export type SsoWidgetRequest = {
  url: string
  options: {
    method: string
    headers: Record<string, string>
    body: string
  }
}

export type SsoWidgetResponse = {
  widget_url: {
    type: Type
    url: string
  }
}

export type SsoRequestParams<Mode> = {
  apiKey: string
  clientId: string
  userGuid: string
  widgetType: Type
  environment: Environment
  options?: ExtraOptions<Mode>
}

function assertSsoProperty(name: string, value: string) {
  if (!value) {
    throw new Error(`Missing SSO property: ${name}`)
  }
}

export function buildSsoRequestParams<Mode>(
  apiKey: string,
  clientId: string,
  userGuid: string,
  environment: Environment | string,
  widgetType: Type,
  options: ExtraOptions<Mode>,
): SsoRequestParams<Mode> {
  assertSsoProperty("apiKey", apiKey)
  assertSsoProperty("clientId", clientId)
  assertSsoProperty("userGuid", userGuid)
  assertSsoProperty("environment", environment)

  return {
    userGuid,
    clientId,
    apiKey,
    environment: lookupEnvironment(environment),
    widgetType,
    options,
  }
}

export function makeRequest<Mode>(params: SsoRequestParams<Mode>): Promise<SsoWidgetResponse> {
  const req = genRequest(params)
  return fetch(req.url, req.options)
    .then((response) => response.json())
}

function genRequest<Mode>({ apiKey, clientId, userGuid, widgetType, environment, options = {} }: SsoRequestParams<Mode>): SsoWidgetRequest {
  const url = `${Host[environment]}/users/${userGuid}/widget_urls`
  const method = "POST"

  const authorization = base64.encode(`${clientId}:${apiKey}`)
  const headers = {
    Accept: "application/vnd.mx.api.v1+json",
    Authorization: `Basic ${authorization}`,
    "Content-Type": "application/json",
  }

  const body = JSON.stringify({
    widget_url: {
      widget_type: widgetType,
      is_mobile_webview: true,
      ui_message_version: 4,
      ...options,
    },
  })

  return {
    url,
    options: {
      method,
      headers,
      body,
    },
  }
}
