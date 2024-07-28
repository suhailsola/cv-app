import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CvService } from '../../services/cv/cv.service';
import { CommonModule } from '@angular/common';
import { CareerCardComponent } from '../../components/career/career-card/career-card.component';
import { EduCardComponent } from '../../components/edu/edu-card/edu-card.component';
import { SkillCardComponent } from '../../components/skill/skill-card/skill-card.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CommonModule,
    CareerCardComponent,
    EduCardComponent,
    SkillCardComponent,
  ],
  templateUrl: './cv.component.html',
})
export class CvComponent implements OnInit {
  @Input() data!: any;
  cookie: string | null = null;
  headers: HttpHeaders;
  constructor(
    private cookieService: CookieService,
    private CVService: CvService,
  ) {
    this.cookie = this.cookieService.get('token');
    this.headers = new HttpHeaders();
    if (this.cookie) {
      this.headers = new HttpHeaders({
        Authorization: `Bearer ${this.cookie}`,
      });
    }
  }

  ngOnInit(): void {
    this.fetchCV();
  }

  fetchCV() {
    if (this.cookie) {
      this.CVService.getCV({ headers: this.headers }).subscribe((res: any) => {
        console.log(res.data);
        if (res.data) {
          this.data = res.data;
        }
      });
    }
  }
}
