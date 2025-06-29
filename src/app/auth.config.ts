import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/master',
  redirectUri: window.location.origin,
  clientId: 'vp-client',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  useSilentRefresh: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  sessionChecksEnabled:true,
  timeoutFactor: 0.75
}
