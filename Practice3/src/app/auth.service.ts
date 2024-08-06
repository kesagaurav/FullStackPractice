import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { CellPhoneService } from './cell-phone.service';
import { User } from './user';


const USERS=[
  new User("gaurav","123"),
  new User("g","456")
];

const userObservables=of(USERS);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAllUsers():Observable<User[]>{
    return userObservables;
  }
   service=inject(CellPhoneService);
  private isLoggedIn=false;
  constructor() { }


  isAutenticated(username:string,password:string):Observable<boolean>{
    return this.getAllUsers().pipe(map(users=>{
      const user=users.find((a)=>a.username===username && a.password===password);
      if(user){
         this.isLoggedIn=true;
      }
      return this.isLoggedIn;
    }))
  }

  isLoggedUser(){
    return this.isLoggedIn;
  }


}
