import { Component } from '@angular/core';
import { AutoServicesService } from '../auto-services.service';
import { Auto } from '../auto.interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  fiat:Auto[] = [];
  constructor(private autoSvc:AutoServicesService){
  }
  ngOnInit(){

    return this.autoSvc.getFiatAuto().then(res=> this.fiat = res)

  }
}
