import { Component } from '@angular/core';
import { AutoServicesService } from '../auto-services.service';

@Component({
  selector: 'app-auto-card',
  templateUrl: './auto-card.component.html',
  styleUrl: './auto-card.component.scss'
})
export class AutoCardComponent {
  constructor(private autoSvc:AutoServicesService){
  }

  ngOnInit(){
        return this.autoSvc.getFiatAuto()
        .then(autos => autos.filter(auto => auto.brand == 'Fiat'))
  }
}


