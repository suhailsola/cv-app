import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import path from 'path';

@Injectable({
  providedIn: 'root',
})
export class EduService {
  constructor(private ApiService: ApiService) {}

  path: string = '/user/edu';
  getEdu(options?: {}): Observable<{}> {
    return this.ApiService.get(`${this.path}`, options);
  }

  createEdu(data: {}, options?: {}): Observable<{}> {
    return this.ApiService.post(`${this.path}`, data, options);
  }
  patchEdu(id: number, data?: {}, options?: {}): Observable<{}> {
    return this.ApiService.patch(`${this.path}/${id}`, data, options);
  }
  deleteEdu(id: number, options?: {}): Observable<{}> {
    return this.ApiService.delete(`${this.path}/${id}`, options);
  }
}
