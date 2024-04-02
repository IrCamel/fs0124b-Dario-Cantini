import { AuthGuard } from './pages/account/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
  loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'chi-siamo',
    loadChildren: () => import('./pages/chi-siamo/chi-siamo.module').then(m => m.ChiSiamoModule)
  },
  {
    path: 'contatti',
    loadChildren: () => import('./pages/contatti/contatti.module').then(m => m.ContattiModule),
    canActivate:[AuthGuard],
    canActivateChild: [AuthGuard]
  },
  { path: 'account',
  loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  { path: 'shared-module',
  loadChildren: () => import('./shared-module/shared-module.module').then(m => m.SharedModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
