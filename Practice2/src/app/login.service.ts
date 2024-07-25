import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='';
  constructor(private http:HttpClient) {
    this.url="http://localhost:9085/login";
   }

   addLogin(a:Login):Observable<Login>{
    return this.http.post<Login>(this.url,a);
   }

   updateLogin(a:Login,id:number):Observable<Login>{
    return this.http.put<Login>(this.url + `/${id}`,a);
   }

   getById(id:number):Observable<any>{
    return this.http.get(this.url + `/${id}`);
   }

   deleteById(id:number):Observable<any>{
    return this.http.delete(this.url + `/${id}`);
   }

   getAllLogins():Observable<Login[]>{
    return this.http.get<Login[]>(this.url + `${'s'}`);
   }
}
