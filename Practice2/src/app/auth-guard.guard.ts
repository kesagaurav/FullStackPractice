import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';


export const authGuardGuard = () => {
  const service=inject(AuthServiceService);
  const router=inject(Router);
  if(service.isUserLoggedIn()){
    return true;
  }else{
    router.navigate(['/logout']);
    return false;
}


}
