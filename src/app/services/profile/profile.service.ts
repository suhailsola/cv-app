import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private ApiService: ApiService) {}

  getProfile(options?: {}): Observable<{}> {
    return this.ApiService.get('/user', options);
  }

  createProfile(data?: {}, options?: {}): Observable<{}> {
    return this.ApiService.post('/user', data, options);
  }

  patchProfile(data?: {}, options?: {}): Observable<{}> {
    return this.ApiService.patch('/user', data, options);
  }
}
