import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:'addProduct',component:AddProductComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
  {path:'viewProduct',component:ViewProductComponent},
  {path:'login',loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule)},
  {path:'logout', component:LogoutComponent},
  {path:'not-found',loadChildren:()=>import("./notfound/notfound.module").then(n=>n.NotfoundModule)},
  {path:'',redirectTo:'/',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
