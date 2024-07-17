import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { Employee } from './employee';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateValuesComponent } from './update-values/update-values.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path:'employee',component:EmployeeFormComponent},
  {path:'update',component:UpdateValuesComponent},
  {path:'login',component:LoginComponent},
  {path:'viewEmployee',component:ViewEmployeeComponent},
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'updateEmployee',component:UpdateEmployeeComponent},
  {path:'employee/:id',component:Employee},
  {path:'',component:NotfoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
