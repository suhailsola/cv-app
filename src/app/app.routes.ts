import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FourOhFourComponent } from './pages/404/404.component';
import { EduComponent } from './pages/edu/edu.component';
import { CareerComponent } from './pages/career/career.component';
import { UserComponent } from './pages/user/user.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { CvComponent } from './pages/cv/cv.component';
import { SocialComponent } from './pages/social/social.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'social',
        component: SocialComponent,
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
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'cv',
        component: CvComponent,
      },
    ],
  },
  {
    path: '**',
    component: FourOhFourComponent,
  },
];
