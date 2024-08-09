import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:'book',component:BookComponent},
  {path:'view',component:ViewBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
