import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';
import { Movie } from '../movie';
import { ApiService } from '../shared/api.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-chipbar',
  templateUrl: './chipbar.component.html',
  styleUrls: ['./chipbar.component.css']
})
export class ChipbarComponent implements OnInit {

  constructor(private apiService:ApiService, private loginService:LoginService, private route:Router,private api:ApiservicesService,private snackBar: MatSnackBar) {
    this.display();
   }
  
  movieName:string="";
  movie!:Movie[];
  
  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logOut();
    this.route.navigate(['/home']);
  }
  searchMovie(){
    console.log("searchbar value: "+this.movieName);
    this.apiService.movieName=this.movieName;
 }
 display(){
  console.log("inside display method : ");
   this.movie = this.api.res.items.filter(p=>p.genres.includes(this.apiService.genre)).map(m=>m);
   console.log("Search Results: "+this.movie);
  }

  likeThis(data:Movie){
    this.apiService.addToCart(data).subscribe((response:any)=>{
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