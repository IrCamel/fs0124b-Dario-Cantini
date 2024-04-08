import { AuthGuard } from './module/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)
  },
  { path: 'auth',
  loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'dashboard',
  loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AuthGuard]
  },
  { path: 'profile',
  loadChildren: () => import('./module/profile/profile.module').then(m => m.ProfileModule),
  canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
