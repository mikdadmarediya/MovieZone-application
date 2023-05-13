import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }
  res:Result=new Result();

  movie!:Movie;

  url:string ="http://localhost:8081/api/v2/movie";
  getMovie():Observable<any>{
    return this.http.get(`${this.url}`);
  }
}
