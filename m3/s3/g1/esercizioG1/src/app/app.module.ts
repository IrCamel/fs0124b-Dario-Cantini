import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './main-components/nav-bar/nav-bar.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { SharedModuleComponent } from './shared-module/shared-module.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SharedModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
