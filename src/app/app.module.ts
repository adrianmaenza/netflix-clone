import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieSingleComponent } from './components/movie-single/movie-single.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NavBarComponent } from './components/partials/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/partials/hero/hero.component';
import { AccountComponent } from './components/account/account.component';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CatalogComponent } from './components/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieSingleComponent,
    MovieAddComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserProfileComponent,
    NavBarComponent,
    HomeComponent,
    HeroComponent,
    AccountComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
