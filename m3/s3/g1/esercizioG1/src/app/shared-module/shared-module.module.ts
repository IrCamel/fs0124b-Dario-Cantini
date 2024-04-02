import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { SharedModuleComponent } from './shared-module.component';


@NgModule({
  declarations: [
    SharedModuleComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],

  exports: [
    SharedModuleModule
  ]
})
export class SharedModuleModule { }
