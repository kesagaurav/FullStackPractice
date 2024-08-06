import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard = () => {
  const service=inject(AuthService);
  const router=inject(Router);
  if(service.isUserLoggedIn()){
    return true;
  }else{
    router.navigate(['/']);
    return false;
  }
};
