import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCellPhoneComponent } from './add-cell-phone/add-cell-phone.component';
import { LoginComponent } from './login/login.component';
import { PipeComponent } from './pipe/pipe.component';
import { UpdateCellPhoneComponent } from './update-cell-phone/update-cell-phone.component';
import { ViewCellPhoneComponent } from './view-cell-phone/view-cell-phone.component';

const routes: Routes = [
  {path:'addcell', component:AddCellPhoneComponent},
  {path:'updatecell/:id',component:UpdateCellPhoneComponent},
  {path:'viewcell', component:ViewCellPhoneComponent},
  {path:'login',component:LoginComponent},
  {path:'pipe',component:PipeComponent},
  {path:'**',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
