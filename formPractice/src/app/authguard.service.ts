import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private service:AuthService,private router:Router) { }
  canActivate(): boolean {
    let isLoggedIn=this.service.isAutenticated();
    if(isLoggedIn!=null){
      return true;
    }else{
      this.router.navigate(['/']);
    }
    return false;
  }
}
