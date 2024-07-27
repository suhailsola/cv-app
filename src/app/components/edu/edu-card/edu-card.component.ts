import { Component, Input } from '@angular/core';
import { Edu } from '../../../pages/edu/edu.type';

@Component({
  selector: 'app-edu-card',
  standalone: true,
  imports: [],
  templateUrl: './edu-card.component.html',
})
export class EduCardComponent {
  @Input() data: Edu = {
    id: 1,
    user_id: 1,
    institute: 'International Islamic University Malaysia',
    certificate_name:
      'Bachelor of Engineeering Electronics - Computer Information',
    level: 'Bachelor Degree',
    start_year: 2018,
    end_year: 2021,
    summary: 'Learn a lot of things and being active with societies',
    created_at: new Date(),
    updated_at: new Date(),
  };
}
