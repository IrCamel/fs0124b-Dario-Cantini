import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FordComponent } from './ford/ford.component';
import { FiatComponent } from './fiat/fiat.component';
import { AudiComponent } from './audi/audi.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'ford', component:FordComponent},
  {path: 'fiat', component:FiatComponent},
  {path: 'audi', component:AudiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
