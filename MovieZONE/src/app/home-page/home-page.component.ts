import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';
import { Result } from '../result';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:Router,private api:ApiservicesService) { }

  res!:Result;
  movieList!:any



  ngOnInit(): void {
    this.api.getMovie().subscribe(data=>{
      console.log(data);
      this.movieList=data;
      this.res=this.movieList;
    })
  }

  LoginFirst(){
    alert("Please Register/Login");
  }

}
