import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from './login';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 private isFlagged=true;
  login!:Login;
  service:LoginService=inject(LoginService);
  // constructor(private service:LoginService) {

  //  }

   isAuthenticated(username:string,password:string):Observable<boolean>{
      return this.service.getAllLogins().pipe(map(users=>{
        const authenticateUser=users.find((u)=>u.username===username && u.password===password);
        if(authenticateUser){
          this.isFlagged=true;
        }
        return this.isFlagged;
      }))

    }


    logout(){
      this.isFlagged=false;
     }

     isUserLoggedIn(){
      return this.isFlagged;
     }

   }



