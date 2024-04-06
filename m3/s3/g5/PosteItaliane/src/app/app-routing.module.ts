import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './pages/account/account.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: "login",
    loadChildren: () => import('./pages/login/login.component').then(m => m.
      LoginComponent)
  },
  {
    path: "register",
    loadChildren: () => import('./pages/register/register.component').then(m => m.
      RegisterComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
