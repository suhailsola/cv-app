import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { EduService } from '../../services/edu/edu.service';
import { Edu } from './edu.type';
import { HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edu.component.html',
})
export class EduComponent implements OnInit {
  @Input() data!: Edu[];

  cookie: string | null = null;
  headers: HttpHeaders;
  educationForm!: FormGroup;

  constructor(
    private cookieService: CookieService,
    private formBuilder: FormBuilder,
    private EduService: EduService,
  ) {
    this.cookie = this.cookieService.get('token');
    this.headers = new HttpHeaders();
    if (this.cookie) {
      this.headers = new HttpHeaders({
        Authorization: `Bearer ${this.cookie}`,
      });
    }

    this.educationForm = this.formBuilder.group({
      institute: ['', Validators.required],
      certificate_name: ['', Validators.required],
      level: ['', Validators.required],
      start_year: ['', Validators.required],
      end_year: ['', Validators.required],
      summary: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.cookie) {
      this.EduService.getEdu({ headers: this.headers }).subscribe(
        (res: any) => {
          console.log(res.data);
          if (res.data) {
            this.data = res.data;
          }
        },
      );
    }
  }
}
