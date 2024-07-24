import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { Profile } from './profile.type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// ToDo: Fix form

@Component({
  selector: 'cv-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(
    private cookieService: CookieService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
  ) {
    const token = this.cookieService.get('token');
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birth_data: ['', Validators.required],
      address: ['', Validators.required],
      gender: [''],
      introduction: [''],
    });
  }

  headers: HttpHeaders;
  profileData!: Profile;
  profileForm: FormGroup;

  ngOnInit(): void {
    this.profileService
      .getProfile({ headers: this.headers })
      .subscribe((res: any) => {
        console.log(res.data);
        this.profileData = res.data;
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

      if (this.profileData) {
        this.updateProfile(profileData);
      } else {
        this.createProfile(profileData);
      }
    }
  }
}
