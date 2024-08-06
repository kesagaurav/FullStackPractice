import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BookService } from './book.service';
import { User } from './user';

const USERS=[
  new User(1,"gaurav","123"),
  new User(2,"gaurav","123"),
  new User(3,"gaurav","123")
];

const observables=of(USERS);
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAllUsers():Observable<User[]>{
    return observables;
  }
  private isLoggedIn=false;;

  constructor(private service:BookService) { }

  isAuthentiactaed(name:string,password:string):Observable<boolean>{
    return this.getAllUsers().pipe(map(users => {
      const authUser = users.find((u) => u.name === name && u.password === password);
      if (authUser) {
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn=false;
      }
      return this.isLoggedIn;
    }));
  }

  isUserLoggedIn():boolean{
    return this.isLoggedIn;
  }
}
