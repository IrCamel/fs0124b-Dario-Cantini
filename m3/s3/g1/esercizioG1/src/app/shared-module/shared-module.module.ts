import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleComponent } from './shared-module.component';


@NgModule({
  declarations: [
    SharedModuleComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    SharedModuleModule
  ]
})
export class SharedModuleModule { }
