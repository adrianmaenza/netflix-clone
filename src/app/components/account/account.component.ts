import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  favourites: any[];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.favourites = this.getFavourites();
    console.log(this.favourites);
  }

  getFavourites(): any[]{
    return this.movieService.getFavourites();
  }

}
