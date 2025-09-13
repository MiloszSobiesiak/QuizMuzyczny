import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AuthGuard } from '../../../shared/guards/auth.guard';

export const HOME_ROUTES: Routes = [
  { path: 'home-page', component: HomePage, canActivate: [AuthGuard] },
];
