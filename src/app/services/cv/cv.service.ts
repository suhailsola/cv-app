import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor(private ApiService: ApiService) {}
  path: string = '/user/cv';

  getCV(options?: {}): Observable<{}> {
    return this.ApiService.get(`${this.path}`, options);
  }
}
