import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';
import { Movie } from '../movie';
import { Result } from '../result';
import { ApiService } from '../shared/api.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route:Router, private apiServices:ApiservicesService,private apiService:ApiService,private loginService:LoginService,private snackBar: MatSnackBar) {
  }

  res!:Result;
  movieName:string="";
  ngOnInit(): void {
  }

  movie:Movie = this.apiServices.movie;
  logOut(){
    this.loginService.logOut();
    this.route.navigate(['/home']);
  }
  data!:any[];
  LoginFirstOrAddToCart(data:any){
    if(data!== null || data!=='') {
      this.apiService.addToCart(data).subscribe((response:any)=>{
        console.log("movie Added");
        this.snackBar.open('Movie Added to Watchlist', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      console.log(data);
    })
  }
}
searchMovie(){
  console.log("searchbar value: "+this.movieName);
  this.apiService.movieName=this.movieName;
}
}
