import { Component } from '@angular/core';
import { Auto } from '../auto.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  auto:Auto[]= [];

  autoRandom:Auto[] = [];

  ngOnInit(){
    fetch('../../assets/db.json')
    .then(res => res.json())
    .then(res => {
      this.auto = res
    this.generateRandom(2)
    });
  }

  generateRandom(n:number){

    for(let i = 0; i < n; i++){
      let randomNumber = Math.floor(Math.random() * this.auto.length );
      this.autoRandom.push(this.auto[randomNumber]);

    }

  }

}
