import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './auth-guard.guard';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { LogoutComponent } from './logout/logout.component';
import { Logout2Component } from './logout2/logout2.component';
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component';
import { UpdateLoginComponent } from './update-login/update-login.component';
import { ViewLoginComponent } from './view-login/view-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[authGuardGuard]
  },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'viewlogin',
    component: ViewLoginComponent,
  },
  {
    path: 'updatelogin/:id',
    component: UpdateLoginComponent,
  },
  { path: 'company', component: CompanyComponent },
  {path:'login1',component:Login1Component},
  {path:'logout2',component:Logout2Component},
  {path:'rxjs',component:RxjsPracticeComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
