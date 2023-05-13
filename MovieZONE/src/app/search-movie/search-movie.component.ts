import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';
import { Movie } from '../movie';
import { Result } from '../result';
import { SearchMovie } from '../searchMovie';
import { SearchResults } from '../searchResult';
import { ApiService } from '../shared/api.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private apiService:ApiservicesService, private loginService:LoginService, private route:Router,private api:ApiService,private snackBar: MatSnackBar) { }
 
  res:SearchResults=new SearchResults();
  movieList!:any;
  movieName:string="";

  ngOnInit(): void {
    this.display();
  }

  movie!:Movie[];

  
  display(){
    console.log("inside display method : ");
    // this.api.movieSearch(this.api.movieName).subscribe(data=>{
    //   this.movieList = data;
    //   this.res=this.movieList;
    //   console.log(this.res);  
    // });
     this.movie = this.apiService.res.items.filter(p=>p.title.toLowerCase().includes( this.api.movieName.toLowerCase())).map(m=>m);
     console.log("Search Results: "+this.movie);
    }

  logOut(){
    this.loginService.logOut();
    this.route.navigate(['/home']);
  }

  searchMovie(){
    console.log("searchbar value: "+this.movieName);
    this.api.movieName=this.movieName;
    this.display();
  }
   
  likeThis(data:Movie){
    this.api.addToCart(data).subscribe((response:any)=>{
      console.log("movie Added");
      this.snackBar.open('Movie Added to Watchlist', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['mat-toolbar', 'mat-primary']
      });
    console.log(data);
  });
  }

}