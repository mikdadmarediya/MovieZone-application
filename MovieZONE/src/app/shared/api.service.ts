import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { base, baseurl,baseurl2 } from 'src/environments/environment';
import { LoginComponent } from '../login/login.component';
import { Movie } from '../movie';
import { UserLogin } from '../user-login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpClient: any;
  movieName!:string;
  genre!: string;

  constructor(private http:HttpClient) { 
  }

  register(user:any) {
    return this.http.post(`${baseurl2}v3/register`,user);
  }

  login(user: UserLogin):Observable<Object>{
    console.log("userName: "+user.userName);
    this.getUserDetails(user.userName);
    return this.http.post(`${baseurl}v1/login`, user);
  }

   addToCart(data:Movie): Observable<Object>{
    console.log("inside add to cart "+LoginComponent.uName);
    return this.http.post(`http://localhost:8082/api/v3/movie/add/${LoginComponent.uName}`,data);
    }

  url3:string=`http://localhost:9000/api/v3/movie/`; 
  displayCartDetails():Observable<any>{
    return this.http.get<Movie[]>(`${this.url3}`+`${LoginComponent.uName}`);
  }

  removeFromCart(data:Movie): Observable<Object> {
    return this.http.delete(`http://localhost:8082/api/v3/movie/delete/${LoginComponent.uName}/${data.id}`);
  }
  userName!:string;
  password:any;

  getUserDetails(userName:any):Observable<any> {
    return this.http.get(`${baseurl2}v3/user/${userName}`,userName);
  }

  // movieSearch(mName:string):Observable<Object>{
  //   return this.http.get(`http://imdb-api.com/en/API/SearchTitle/k_msp7axie/${mName}`);
  // }
}
