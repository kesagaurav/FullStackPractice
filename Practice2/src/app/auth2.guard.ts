import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth2Service } from './auth2.service';

export const auth2Guard = () => {
  const service=inject(Auth2Service);
  const router=inject(Router);
  if(service.isUserLogin()){
  return true;
  }
  else{
    router.navigate(['/company']);
    return false;
  }
};
