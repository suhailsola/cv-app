import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { Profile } from './profile.type';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
  selector: 'cv-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input() data!: Profile;

  cookie: string | null = null;
  headers: HttpHeaders;
  profileForm: FormGroup;
  
  constructor(
    private cookieService: CookieService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private utilService: UtilsService,
  ) {
    this.cookie = this.cookieService.get('token');
    this.headers = new HttpHeaders();
    if (this.cookie) {
      this.headers = new HttpHeaders({
        Authorization: `Bearer ${this.cookie}`,
      });
    }

    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birth_date: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      introduction: [''],
    });
  }

  ngOnInit(): void {
    if (this.cookie) {
      this.profileService
        .getProfile({ headers: this.headers })
        .subscribe((res: any) => {
          console.log(res.data);
          if (res.data) {
            this.data = res.data;
            this.initializeForm(this.data);
          }
        });
    }
  }

  initializeForm(data: Profile) {
    this.profileForm = this.formBuilder.group({
      firstName: [data.firstName, Validators.required],
      lastName: [data?.lastName, Validators.required],
      birth_date: [
        data.birth_date ? this.utilService.formatDate(data.birth_date) : '',
        Validators.required,
      ],
      address: [data?.address, Validators.required],
      gender: [data?.gender, Validators.required],
      introduction: [data?.introduction],
    });
  }

  createProfile(data: Profile) {
    this.profileService
      .createProfile(data, { headers: this.headers })
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  updateProfile(data: Profile) {
    this.profileService
      .patchProfile(data, { headers: this.headers })
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const profileData = this.profileForm.value;

      if (this.data) {
        this.updateProfile(profileData);
      } else {
        this.createProfile(profileData);
      }
    }
  }
}
