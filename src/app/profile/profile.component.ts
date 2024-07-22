import { Component } from '@angular/core';

@Component({
  selector: 'cv-profile',
  standalone: true,
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  profile = {
    name: 'Suhail',
    age: 29,
  };
}
