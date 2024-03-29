import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CompleteTaskComponent } from './component/complete-task/complete-task.component';
import { UncompleteTaskComponent } from './component/uncomplete-task/uncomplete-task.component';
import { UserTaskComponent } from './component/user-task/user-task.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'complete-task',
    component: CompleteTaskComponent
  },
  {
    path: 'uncomplete-task',
    component: UncompleteTaskComponent,
  },
  {
    path: 'user-task',
    component: UserTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }