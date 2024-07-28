import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocialService {
  constructor(private ApiService: ApiService) {}
  path: string = '/user/social';

  getSocial(options?: {}): Observable<{}> {
    return this.ApiService.get(`${this.path}`, options);
  }

  createSocial(data: {}, options?: {}): Observable<{}> {
    return this.ApiService.post(`${this.path}`, data, options);
  }
  patchSocial(data?: {}, options?: {}): Observable<{}> {
    return this.ApiService.patch(`${this.path}`, data, options);
  }
}
