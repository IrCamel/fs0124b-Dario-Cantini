import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AutoCardComponent } from './auto-card/auto-card.component';
import { FordComponent } from './ford/ford.component';
import { AudiComponent } from './audi/audi.component';
import { FiatComponent } from './fiat/fiat.component';
import { AudioIntroComponent } from './audio-intro/audio-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AutoCardComponent,
    FordComponent,
    AudiComponent,
    FiatComponent,
    AudioIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
