import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ServerComponent } from './server/server.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:'book',component:BookComponent},
  {path:'view',component:ViewBookComponent},
  {path:'server',component:ServerComponent},
  {path:'rxjs',component:RxjsComponent},
  {path:'',redirectTo:'/view',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
