import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly url = 'http://localhost:7050/api/v1/movies';
  constructor(
    private http: HttpClient,
    private oauthService: OAuthService
  ) {}
  getMovies(): Observable<any> {
    const token = this.oauthService.getAccessToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.url, { headers });;
  }
}
