import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
export const authGuard = () => {
  const service = inject(AuthService);
  const router = inject(Router);
  return true;
  if (service.isUserLoggedIn()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};

// export class authGuard implements CanActivate{
//   constructor(private service:AuthService,private router:Router) {

//   }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//    let a=this.service.isLoggedIn;
//     if(a){
//       return true;
//     }
//     this.router.navigate(['/']);
//     return false;
//   }

// }
