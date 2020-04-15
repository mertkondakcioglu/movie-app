import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  GetMovies(title: string) {
    this.movieService.GetMovies(title)
      .subscribe((resp: any) => {
        this.movies = resp;
      });
  }

}
