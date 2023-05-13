import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  setToken(token:any){
    localStorage.setItem("token",token);
    console.log("Token set successful");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }

  isLogedIn()
  {
    let token = localStorage.getItem("token");
    if(token==undefined || token==null || token=="") {
      return false;
    }
    else{
      return true;
    }
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }

}
