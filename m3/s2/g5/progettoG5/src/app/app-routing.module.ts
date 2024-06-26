import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CompleteTaskComponent } from './component/complete-task/complete-task.component';
import { UncompleteTaskComponent } from './component/uncomplete-task/uncomplete-task.component';
import { FeedbackComponent } from './component/feedback/feedback.component';


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
    path: 'feedback',
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
