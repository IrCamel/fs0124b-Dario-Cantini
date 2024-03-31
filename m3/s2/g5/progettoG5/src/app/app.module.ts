import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UncompleteTaskComponent } from './component/uncomplete-task/uncomplete-task.component';
import { CompleteTaskComponent } from './component/complete-task/complete-task.component';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './component/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UncompleteTaskComponent,
    CompleteTaskComponent,
    FeedbackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
