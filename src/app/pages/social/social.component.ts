import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Social } from './social.type';
import { SocialService } from '../../services/social/social.service';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './social.component.html',
})
export class SocialComponent implements OnInit {
  @Input() data!: Social;
  cookie: string | null = null;
  headers: HttpHeaders;
  socialForm: FormGroup;

  constructor(
    private cookieService: CookieService,
    private SocialService: SocialService,
    private formBuilder: FormBuilder,
  ) {
    this.cookie = this.cookieService.get('token');
    this.headers = new HttpHeaders();
    if (this.cookie) {
      this.headers = new HttpHeaders({
        Authorization: `Bearer ${this.cookie}`,
      });
    }

    this.socialForm = this.formBuilder.group({
      mobile: [''],
      linked_in: [''],
      facebook: [''],
      twitter: [''],
      instagram: [''],
      github: [''],
    });
  }

  ngOnInit(): void {
    if (this.cookie) {
      this.SocialService.getSocial({ headers: this.headers }).subscribe(
        (res: any) => {
          console.log(res.data);
          if (res.data) {
            this.data = res.data;
            this.initializeForm(this.data);
          }
        },
      );
    }
  }

  initializeForm(data: Social) {
    this.socialForm = this.formBuilder.group({
      mobile: [data.mobile],
      linked_in: [data?.linked_in],
      facebook: [data.facebook],
      twitter: [data?.twitter],
      instagram: [data?.instagram],
      github: [data?.github],
    });
  }

  createSocial(data: Social) {
    this.SocialService.createSocial(data, { headers: this.headers }).subscribe(
      (res: any) => {
        console.log(res);
      },
    );
  }

  updateSocial(data: Social) {
    this.SocialService.patchSocial(data, { headers: this.headers }).subscribe(
      (res: any) => {
        console.log(res);
      },
    );
  }

  onSubmit() {
    if (this.socialForm.valid) {
      const socialData = this.socialForm.value;
      if (this.data) {
        this.updateSocial(socialData);
      } else {
        this.createSocial(socialData);
      }
    }
  }
}
