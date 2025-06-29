import { Injectable } from "@angular/core";
import { OAuthService, TokenResponse } from "angular-oauth2-oidc";
import { authConfig } from "../../auth.config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

    this.oauthService.setupAutomaticSilentRefresh();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  getUserProfile(): Record<string, any> {
    return this.oauthService.getIdentityClaims();
  }

  refreshToken(): Promise<TokenResponse> {
    return this.oauthService.refreshToken();
  }
}
