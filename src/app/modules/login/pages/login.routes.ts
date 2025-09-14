import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { ReverseAuthGuard } from '../../../shared/guards/reverse-auth.guard';

export const LOGIN_ROUTES: Routes = [
  { path: 'login', component: LoginPage, canActivate: [ReverseAuthGuard] },
];
