import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MovieSingleComponent } from './components/movie-single/movie-single.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {path: 'movie-list', component: CatalogComponent},
  {path: 'movie-single/:id', component: MovieSingleComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
