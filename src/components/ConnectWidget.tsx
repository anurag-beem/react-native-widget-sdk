import React from "react"
import { SafeAreaView } from "react-native"
import { WebView } from "react-native-webview"

import { LoadUrlCallbacks } from "./load_url"
import { handleConnectRequest, ConnectCallbacks } from "../post_messages"
import { Type, ConnectWidgetMode } from "../widget/widgets"
import { buildSsoRequestParams } from "../loader/sso_request"

import { makeModeSpecificComponent } from "./mode_specific_component"
import { makeRequestInterceptor } from "./request_interceptor"

import { useSso, SsoProps } from "./sso"
import { useFullscreenStyles } from "./screen_dimensions"

export type ConnectWidgetProps
  = SsoProps
  & ConnectCallbacks
  & LoadUrlCallbacks
  & { mode?: ConnectWidgetMode }

export const ConnectAggregationWidget = makeModeSpecificComponent<ConnectWidgetProps, ConnectWidgetMode>("aggregation", ConnectWidget)
export const ConnectVerificationWidget = makeModeSpecificComponent<ConnectWidgetProps, ConnectWidgetMode>("verification", ConnectWidget)

export default function ConnectWidget({
  clientId,
  apiKey,
  userGuid,
  environment,
  mode,
  onSsoError,
  ...callbacks
}: ConnectWidgetProps) {
  const ssoParams = buildSsoRequestParams(apiKey, clientId, userGuid,
    environment, Type.ConnectWidget, { mode })

  const widgetSsoUrl = useSso(ssoParams, onSsoError)
  const viewStyles = useFullscreenStyles()

  if (!widgetSsoUrl) {
    return <SafeAreaView style={viewStyles} />
  }

  const onShouldStartLoadWithRequest = makeRequestInterceptor(widgetSsoUrl, callbacks, handleConnectRequest)

  return (
    <SafeAreaView style={viewStyles}>
      <WebView
        testID="connect-widget-webview"
        scrollEnabled={true}
        source={{ uri: widgetSsoUrl }}
        originWhitelist={["*"]}
        cacheMode="LOAD_NO_CACHE"
        javaScriptEnabled={true}
        domStorageEnabled={true}
        incognito={true}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      />
    </SafeAreaView>
  )
}
