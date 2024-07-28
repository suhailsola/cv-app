import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private ApiService: ApiService) {}
  path: string = '/user/skills';

  getSkills(options?: {}): Observable<{}> {
    return this.ApiService.get(`${this.path}`, options);
  }

  createSkills(data: {}, options?: {}): Observable<{}> {
    return this.ApiService.post(`${this.path}`, data, options);
  }
  patchSkills(id: number, data?: {}, options?: {}): Observable<{}> {
    return this.ApiService.patch(`${this.path}/${id}`, data, options);
  }
  deleteSkills(id: number, options?: {}): Observable<{}> {
    return this.ApiService.delete(`${this.path}/${id}`, options);
  }
}
