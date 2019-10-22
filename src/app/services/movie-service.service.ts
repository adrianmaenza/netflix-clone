import { Injectable } from '@angular/core';
import movies from '../data/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }

  getMovies(): any[]{
    return [
      ...movies
    ];
  }

  getMovie(id){
    return this.getMovies().find(movie => movie.id == id);
  }

  getFavourites(): any[] {
    return this.getMovies().filter(movie => this.isFavourite(movie.id));
  }

  addToFavourites(id: number): void {
    let favourites;

    if (sessionStorage.favourites) {
      favourites = JSON.parse(sessionStorage.getItem("favourites"));
      if (favourites && !this.isFavourite(id)) {
        favourites.push(id);
      } else {
        favourites = [id];
      }
    } else {
      favourites = [id];
    }

    sessionStorage.favourites = JSON.stringify(favourites);
  }

  isFavourite(id: number):boolean {
    const favourites = JSON.parse(sessionStorage.getItem("favourites"));
    console.log(favourites);
    // debugger;
    return (favourites && favourites.find(item => item == id) != undefined);
  }
}
