import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}
  formatDate(date: Date): string {
    date = new Date(date);
    return date.toISOString().split('T')[0];
  }
}
