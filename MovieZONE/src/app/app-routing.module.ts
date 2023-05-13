import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipbarComponent } from './chipbar/chipbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { CanActivateGuard } from './shared/can-activate.gaurd';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[CanActivateGuard]},
  {path:'home',component:HomePageComponent},
  {path:'watchlist',component:WatchlistComponent},
  {path:'moviedetails',component:MovieDetailsComponent},
  {path:'search',component:SearchMovieComponent},
  {path:'chipbar',component:ChipbarComponent},
  {path:"",redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
