import { Routes } from '@angular/router';
import { HOME_ROUTES } from './modules/home/pages/home.routes';
import { LOGIN_ROUTES } from './modules/login/pages/login.routes';
import { BaseLayoutPage } from './modules/base-layout/pages/base-layout-page/base-layout-page';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  ...LOGIN_ROUTES,
  {
    path: '',
    component: BaseLayoutPage,
    children: [...HOME_ROUTES],
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/login' },
];
