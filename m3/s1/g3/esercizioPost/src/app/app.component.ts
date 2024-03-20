import { Component } from '@angular/core';
import { Post } from './Models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

articoliArr: Post[] = [];

ngOnInit() {
  fetch('../assets/db.json')
  .then((articoli) => articoli.json())
  .then((articolo) => (this.articoliArr = articolo.posts))
  }
}
