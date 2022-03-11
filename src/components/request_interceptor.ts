import { WebViewNavigation } from "react-native-webview"
import { parse as parseUrl } from "url"

import { loadUrlInBrowser, LoadUrlInBrowserProps } from "./load_url_in_browser"

export enum Action {
  LoadInApp,
  LoadInBrowser,
  Intercept,
}

class Interceptor {
  constructor(protected widgetUrl: string, protected uiMessageWebviewUrlScheme: string) {}

  action(request: WebViewNavigation): Action {
    if (request.url === this.widgetUrl) {
      return Action.LoadInApp
    }

    const { protocol } = parseUrl(request.url)

    /* The `uiMessageWebviewUrlScheme` value will be something like "appscheme"
     * but the `url.protocol` will be "appscheme:", so we slice off the last
     * character so that we can compare them.
     */
    const scheme = (protocol || "").slice(0, -1)
    if (scheme === this.uiMessageWebviewUrlScheme) {
      return Action.Intercept
    }

    return Action.LoadInBrowser
  }
}

export function makeRequestInterceptor<WidgetCallbackProps>(
  widgetUrl: string,
  uiMessageWebviewUrlScheme: string,
  callbacks: LoadUrlInBrowserProps & WidgetCallbackProps,
  handler: (url: string, callbacks: WidgetCallbackProps) => void,
) {
  const interceptor = new Interceptor(widgetUrl, uiMessageWebviewUrlScheme)

  return function (request: WebViewNavigation) {
    const action = interceptor.action(request)
    switch (action) {
      case Action.LoadInApp:
        return true

      case Action.Intercept:
        handler(request.url, callbacks)
        return false

      case Action.LoadInBrowser:
        loadUrlInBrowser(request.url, callbacks)
        return false
    }
  }
}
