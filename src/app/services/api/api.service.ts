import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environment/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options?: {}) {
    return this.httpClient.get<T>(`${environment.apiUrl}${url}`, options);
  }
  post<T>(url: string, data?: {}, options?: {}) {
    return this.httpClient.post<T>(
      `${environment.apiUrl}${url}`,
      data,
      options,
    );
  }
  patch<T>(url: string, data?: {}, options?: {}) {
    return this.httpClient.patch<T>(
      `${environment.apiUrl}${url}`,
      data,
      options,
    );
  }
  delete<T>(url: string, options?: {}) {
    return this.httpClient.delete<T>(`${environment.apiUrl}${url}`, options);
  }
}
