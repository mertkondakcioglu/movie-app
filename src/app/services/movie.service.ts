import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  GetMovies(title: string) {
    return this.http.get(`http://omdbapi.com/?t="${title}"&apikey=d042750a`);
  }
  GetMovie(id: string) {
    return this.http.get(`http://omdbapi.com/?i=${id}&apikey=d042750a`);

  }
}
