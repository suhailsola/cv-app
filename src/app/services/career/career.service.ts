import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  constructor(private ApiService: ApiService) {}
  path: string = '/user/career';

  getCareer(options?: {}): Observable<{}> {
    return this.ApiService.get(`${this.path}`, options);
  }

  createCareer(data: {}, options?: {}): Observable<{}> {
    return this.ApiService.post(`${this.path}`, data, options);
  }
  patchCareer(id: number, data?: {}, options?: {}): Observable<{}> {
    return this.ApiService.patch(`${this.path}/${id}`, data, options);
  }
  deleteCareer(id: number, options?: {}): Observable<{}> {
    return this.ApiService.delete(`${this.path}/${id}`, options);
  }
}
