import { Component } from '@angular/core';
import { IMoviesPopularService } from '../../service/i-movies-popular.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
films:[] = [];

  constructor(private popularMovies: IMoviesPopularService) { }

    apiUrl:string = environment.PopularUrl

    ngOnInit(){
      this.popularMovies.getPopularMovies(this.apiUrl)
    }
}
