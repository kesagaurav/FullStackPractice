import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../../../formPractice2/src/app/auth-guard';
import { AddBookComponent } from './add-book/add-book.component';
import { ChildComponent } from './child/child.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserComponent } from './user/user.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:'addBook',component:AddBookComponent},
  {path:'viewBook',canActivate:[AuthGuard], component:ViewBookComponent},
  {path:'updateBook/:id',component:UpdateBookComponent},
  {path:'user',component:UserComponent},
  {path:'child',component:ChildComponent},
  {path:'**',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
