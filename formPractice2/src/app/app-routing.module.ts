import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { CourseComponentUsingOutputDecoratorComponent } from './course-component-using-output-decorator/course-component-using-output-decorator.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [
  {path:'addstudent',component:AddstudentComponent},
  {path:'updatestudent/:id',component:UpdatestudentComponent},
  {path:'viewstudent',component:ViewstudentComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'property',component:PropertyBindingComponent},
  {path:'directive',component:DirectiveDemoComponent},
  {path:'course-list',component:CourseComponentUsingOutputDecoratorComponent},
  {path:'pipe',component:PipesDemoComponent},
  {path:'**',component:NotFoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
