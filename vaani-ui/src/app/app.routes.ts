import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { ImproveComponent } from './pages/improve/improve';
import { HistoryComponent } from './pages/history/history';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'improve', component: ImproveComponent },
  { path: 'history', component: HistoryComponent }
];
