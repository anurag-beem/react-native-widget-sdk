/**
 * This file is auto-generated by generate_types.ts, DO NOT EDIT.
 *
 * If you need to make changes to the code in this file, you can do so by
 * modifying definitions.yml.
 */
export enum Type {
  Load = "mx/load",
  Ping = "mx/ping",
  FocusTrap = "mx/focusTrap",
  ConnectLoaded = "mx/connect/loaded",
  ConnectEnterCredentials = "mx/connect/enterCredentials",
  ConnectInstitutionSearch = "mx/connect/institutionSearch",
  ConnectSelectedInstitution = "mx/connect/selectedInstitution",
  ConnectMemberConnected = "mx/connect/memberConnected",
  ConnectConnectedPrimaryAction = "mx/connect/connected/primaryAction",
  ConnectMemberDeleted = "mx/connect/memberDeleted",
  ConnectCreateMemberError = "mx/connect/createMemberError",
  ConnectMemberStatusUpdate = "mx/connect/memberStatusUpdate",
  ConnectOAuthError = "mx/connect/oauthError",
  ConnectOAuthRequested = "mx/connect/oauthRequested",
  ConnectStepChange = "mx/connect/stepChange",
  ConnectSubmitMFA = "mx/connect/submitMFA",
  ConnectUpdateCredentials = "mx/connect/updateCredentials",
  PulseLoad = "mx/pulse/load",
  PulseOverdraftWarningCtaTransferFunds = "mx/pulse/overdraftWarning/cta/transferFunds",
  AccountCreated = "mx/account/created",
}

export const typeLookup: Record<string, Type> = {
  [Type.Load]: Type.Load,
  [Type.Ping]: Type.Ping,
  [Type.FocusTrap]: Type.FocusTrap,
  ["mx/focustrap"]: Type.FocusTrap,
  [Type.ConnectLoaded]: Type.ConnectLoaded,
  [Type.ConnectEnterCredentials]: Type.ConnectEnterCredentials,
  [Type.ConnectInstitutionSearch]: Type.ConnectInstitutionSearch,
  [Type.ConnectSelectedInstitution]: Type.ConnectSelectedInstitution,
  [Type.ConnectMemberConnected]: Type.ConnectMemberConnected,
  [Type.ConnectConnectedPrimaryAction]: Type.ConnectConnectedPrimaryAction,
  [Type.ConnectMemberDeleted]: Type.ConnectMemberDeleted,
  [Type.ConnectCreateMemberError]: Type.ConnectCreateMemberError,
  [Type.ConnectMemberStatusUpdate]: Type.ConnectMemberStatusUpdate,
  [Type.ConnectOAuthError]: Type.ConnectOAuthError,
  [Type.ConnectOAuthRequested]: Type.ConnectOAuthRequested,
  [Type.ConnectStepChange]: Type.ConnectStepChange,
  [Type.ConnectSubmitMFA]: Type.ConnectSubmitMFA,
  [Type.ConnectUpdateCredentials]: Type.ConnectUpdateCredentials,
  [Type.PulseLoad]: Type.PulseLoad,
  [Type.PulseOverdraftWarningCtaTransferFunds]: Type.PulseOverdraftWarningCtaTransferFunds,
  [Type.AccountCreated]: Type.AccountCreated,
}
