import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateLoginComponent } from './update-login/update-login.component';
import { ViewLoginComponent } from './view-login/view-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
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
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
