import { Router } from '@angular/router';
import { iMovies } from './../models/i-movies';
import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  movies: iMovies[] = [];

  constructor(private movieSvc: MoviesService, private router: Router) {}

  ngOnInit(){
    this.movieSvc.$movie.subscribe(movies => {
      this.movies = movies;
    });
  }
}

