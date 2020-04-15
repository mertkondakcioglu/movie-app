import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    // const param = this.route.snapshot.paramMap.get('id');       parametre almak için 1.yol
    //           console.log(resp);
    this.route.params.subscribe(params => {                   // tercih edilen yol

      this.movieService.GetMovie(params.id)
        .subscribe(resp => {
          this.movie = resp;
        });
    });

  }

}
