import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserTaskComponent } from './component/user-task/user-task.component';
import { UncompleteTaskComponent } from './component/uncomplete-task/uncomplete-task.component';
import { CompleteTaskComponent } from './component/complete-task/complete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserTaskComponent,
    UncompleteTaskComponent,
    CompleteTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
