import $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import 'slick-carousel';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  slides: any[] = [
    {id: 1, title: "Slide 1", link: "#", img: "assets/shrek.jpg"},
    {id: 2, title: "Slide 2", link: "#", img: "assets/turbo.jpg"}
    // {id: 3, title: "Slide 3", link: "#", img: "assets/"},
    // {id: 4, title: "Slide 4", link: "#", img: "assets/"}
  ];

  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, arrows: false, autoplay: true, autoplaySpeed: 3000 };

  constructor() { }

  ngOnInit() {
    $('#main-slider').slick()
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
