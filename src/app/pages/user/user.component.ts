import { Component, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private AuthService: AuthService) {}
  router = inject(Router);
  logout() {
    this.AuthService.logout();
    this.router.navigate(['login']);
  }
}
