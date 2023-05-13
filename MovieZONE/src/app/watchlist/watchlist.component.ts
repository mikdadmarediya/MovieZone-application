import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';
import { Movie } from '../movie';
import { ApiService } from '../shared/api.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private apiService:ApiService, private loginService:LoginService, private route:Router,private api:ApiservicesService) {
    this.display();
    }
  
    userName:string=this.apiService.userName;
    movieName:string="";
  
    ngOnInit(): void {
    }
  
    movie!:Movie[];
    display(){
      console.log("inside display method : ");
      this.apiService.displayCartDetails().subscribe(data=>{
        this.movie = data;  
      })
    }
    DeleteFromCart(data:Movie){
      if(data!== null || data!=='') {
        this.apiService.removeFromCart(data).subscribe((response:any)=>{
          console.log("movie Deleted");
        console.log(data);
        this.display();
      })
    }
    }
    logOut(){
      this.loginService.logOut();
      this.route.navigate(['/home']);
    }
    searchMovie(){
      console.log("searchbar value: "+this.movieName);
      this.apiService.movieName=this.movieName;
   }
}
