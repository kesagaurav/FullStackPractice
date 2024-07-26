import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from './user';
const USERS=[
  new User(1,"user1","user2"),
  new User(2,"user2","user2")
]
const usersObservable=of(USERS);
@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  private isLoggedIn=false;
  getAllUsers():Observable<User[]>{
    return usersObservable;
  }

  isAuthenticated(username:string,password:string):Observable<boolean>{
    return this.getAllUsers().pipe(map(users=>{
      const authenticateUser=users.find((a)=>a.username===username && a.password===password);
      if(authenticateUser){
        this.isLoggedIn=true;
      }
      return this.isLoggedIn;
    }))
  }

  isUserLogin(){
    return this.isLoggedIn;
  }
}
