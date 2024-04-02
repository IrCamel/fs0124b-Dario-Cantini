import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModuleComponent } from '../../shared-module/shared-module.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    HomepageComponent,
    SharedModuleComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModuleModule
  ]
})
export class HomepageModule { }
