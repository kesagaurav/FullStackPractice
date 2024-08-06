import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from './user';

  const USERS=[
    new User(1,"gaurav","123"),
    new User(2,"gaurav1","123gau"),
    new User(3,"gaurav2","123kesa"),

  ]

  const observables=of(USERS);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAllUsers():Observable<User[]>{
    return observables;
  }
  isLoggedIn=false;
  constructor() {

   }

   isAutenticated(username:string,password:string):Observable<boolean>{
    return this.getAllUsers().pipe(map(users => {
       const user = users.find(u =>( u.username === username) && (u.password === password));
       if (user) {
         this.isLoggedIn = true;
       }else{
        this.isLoggedIn=false;
       }
       return this.isLoggedIn;
     }));
   }

   isUserLoggedIn(){
     this.isLoggedIn=true;
     return this.isLoggedIn;
   }
}
