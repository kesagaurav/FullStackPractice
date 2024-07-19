import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [
  {path:'addstudent',component:AddstudentComponent},
  {path:'updatestudent/:id',component:UpdatestudentComponent},
  {path:'viewstudent',component:ViewstudentComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'property',component:PropertyBindingComponent},
  {path:'**',component:NotFoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
