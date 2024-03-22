import { Component } from '@angular/core';
import { AutoServicesService } from '../auto-services.service';
import { Auto } from '../auto.interface';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  ford:Auto[] = [];
  constructor(private autoSvc:AutoServicesService){
  }
  ngOnInit(){

    return this.autoSvc.getFordAuto().then(res=> this.ford = res)

  }
}
