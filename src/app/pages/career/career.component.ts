import { Component, inject, Input, OnInit } from '@angular/core';
import { CareerCardComponent } from '../../components/career/career-card/career-card.component';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Career } from './career.type';
import { CookieService } from 'ngx-cookie-service';
import { CareerService } from '../../services/career/career.service';
import { HttpHeaders } from '@angular/common/http';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CareerCardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './career.component.html',
})
export class CareerComponent implements OnInit {
  @Input() data!: Career[];
  cookie: string | null = null;
  headers: HttpHeaders;
  careerForm!: FormGroup;

  constructor(
    private cookieService: CookieService,
    private formBuilder: FormBuilder,
    private CareerService: CareerService,
  ) {
    this.cookie = this.cookieService.get('token');
    this.headers = new HttpHeaders();
    if (this.cookie) {
      this.headers = new HttpHeaders({
        Authorization: `Bearer ${this.cookie}`,
      });
    }

    this.careerForm = this.formBuilder.group({
      company: ['', Validators.required],
      work_title: ['', Validators.required],
      location: ['', Validators.required],
      start_year: ['', Validators.required],
      start_month: ['', Validators.required],
      end_year: [''],
      end_month: [''],
      summary: [''],
    });
  }

  ngOnInit(): void {
    this.fetchCareer();
  }

  fetchCareer() {
    if (this.cookie) {
      this.CareerService.getCareer({ headers: this.headers }).subscribe(
        (res: any) => {
          console.log(res.data);
          if (res.data) {
            this.data = res.data;
          }
        },
      );
    }
  }

  onSubmit() {
    if (this.careerForm.valid) {
      const careerData = this.careerForm.value;

      if (this.data) {
        this.CareerService.createCareer(careerData, {
          headers: this.headers,
        }).subscribe((res: any) => {
          console.log(res.data);
          this.fetchCareer();
          this.careerForm.reset();
        });
      }
    }
  }
}
