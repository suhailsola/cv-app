import { Component, Input } from '@angular/core';
import { Career } from '../../../pages/career/career.type';

@Component({
  selector: 'app-career-card',
  standalone: true,
  imports: [],
  templateUrl: './career-card.component.html',
})
export class CareerCardComponent {
  @Input() data: Career = {
    id: 1,
    user_id: 1,
    company: 'Google',
    work_title: 'Software Engineer',
    start_year: 2018,
    end_year: 2021,
    start_month: 1,
    end_month: 1,
    location: 'London, UK',
    summary: 'Learn a lot of things and being active with societies',
    created_at: new Date(),
    updated_at: new Date(),
  };
}
