import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  addToFavourites(id): void{
    this.movieService.addToFavourites(id);
  }

  isFavourite(id: number): boolean {
    return this.movieService.isFavourite(id);
  }

}
