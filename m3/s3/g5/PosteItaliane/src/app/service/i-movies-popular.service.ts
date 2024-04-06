import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IMoviesPopularService {

  constructor(private http: HttpClient) { }
  films:[] = [];
  apiUrl: string = environment.PopularUrl

  getPopularMovies(apiUrl:string){
    return this.http.get(apiUrl).subscribe(data => this.films)
  }
}
