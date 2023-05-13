import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';
import { Result } from '../result';
import { ApiService } from '../shared/api.service';
import { LoginService } from '../shared/login.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Movie } from '../movie';
import { LoginComponent } from '../login/login.component';
import { SearchMovieComponent } from '../search-movie/search-movie.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showAdd:boolean = false;
  showUpdate:boolean = false;
  fav = 0;
  res:Result=new Result();
  movieList!:any;
  userName:string=this.apiService.userName;
  movieName:string="";


  //pagination
  // arrdata!: Array<any>; 
  // totalRecords!: number;
  // page:number = 1;
  // i:number = 5;
  

  constructor(private apiService:ApiService, private loginService:LoginService, private route:Router,private api:ApiservicesService,private search:SearchMovieComponent,private snackBar: MatSnackBar) {
    
  }

  // getData(){this.api.getMovie().subscribe(data=>{
  //   console.log(data);
  //   this.arrdata = data.items;
  //   this.totalRecords = data.items.length;

  // })    
  // }



  ngOnInit(): void {
    console.log("ngOnInit Invoked : "+LoginComponent.uName);
    this.api.getMovie().subscribe(data=>{
      console.log(data);
      this.movieList=data;
      
      
      this.api.res = this.movieList;
      this.res=this.movieList;
    })
  }

  data!:any[];
  LoginFirstOrAddToCart(data:any){
    if(data!== null || data!=='') {
      this.fav += 1;
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
  logOut() {
    this.loginService.logOut();
    this.route.navigate(['/home']);
  }
  navigateToCart(metadata:Movie){
    this.api.movie = metadata;
  }

  searchMovie(){
    console.log("searchbar value: "+this.movieName);
    this.apiService.movieName=this.movieName;
 }

 ActionSearch(){
  this.apiService.genre="Action";
 }
 AdvSearch(){
  this.apiService.genre="Adventure";
 }
 ComedySearch(){
  this.apiService.genre="Comedy";
 }
 DramaSearch(){
  this.apiService.genre="Drama";
 }
 ThrillerSearch(){
  this.apiService.genre="Thriller";
 }
 FictionSearch(){
  this.apiService.genre="Sci-Fi";
 }


 

}