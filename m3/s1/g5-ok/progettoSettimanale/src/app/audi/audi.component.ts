import { Component } from '@angular/core';
import { AutoServicesService } from '../auto-services.service';
import { Auto } from '../auto.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  audi:Auto[] = [];
  constructor(private autoSvc:AutoServicesService){
  }
  ngOnInit(){

    return this.autoSvc.getAudiAuto().then(res=> this.audi = res)

  }
}
