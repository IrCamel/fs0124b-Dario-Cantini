import { Injectable } from '@angular/core';
import { Auto } from './auto.interface';

@Injectable({
  providedIn: 'root'
})
export class AutoServicesService {

  getAllAutos():Promise<Auto[]> {
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((autos:Auto[]) => autos )
}

getFiatAuto():Promise<Auto[]> {
    return this.getAllAutos()
    .then(autos => autos.filter(auto => auto.brand == 'Fiat'))
}
getFordAuto():Promise<Auto[]> {
    return this.getAllAutos()
    .then(autos => autos.filter(auto => auto.brand == 'Ford'))
}
getAudiAuto():Promise<Auto[]> {
    return this.getAllAutos()
    .then(autos => autos.filter(auto => auto.brand == 'Audi'))
}

}
