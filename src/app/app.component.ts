import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { BackendService } from './core/services/backend.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private backendService: BackendService,
    private destroyRef: DestroyRef
  ) {}
  data = signal<any[]>([]);

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.backendService.getMovies().pipe(
        finalize(() => this.destroyRef)
      ).subscribe(res => {
        this.data.set(res.data);
      })
    }
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getUserProfilesArray(): any[] {
  return Object.entries(this.authService.getUserProfile()).map(([key, value]) => ({
    key: key,
    value: value
  }));
}
  title = 'vp-cinema-web';
}
