import { Component } from '@angular/core';
import { FormsComponent } from "../forms/forms.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
