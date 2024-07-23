import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.development';
import { tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = environment.apiUrl;
  cookieService = inject(CookieService);

  register(data: any) {
    return this.httpClient.post(`${this.apiUrl}/auth/register`, data);
  }
  login(data: any) {
    return this.httpClient
      .post(`${this.apiUrl}/auth/login`, data)
      .pipe(
        tap((result: any) => this.cookieService.set('token', result.data.jwt)),
      );
  }

  logout() {
    this.cookieService.delete('token');
  }
}
