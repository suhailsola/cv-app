import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FourOhFourComponent } from './pages/404/404.component';
import { EduComponent } from './pages/edu/edu.component';
import { CareerComponent } from './pages/career/career.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'edu',
    component: EduComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: '**',
    component: FourOhFourComponent,
  },
];
