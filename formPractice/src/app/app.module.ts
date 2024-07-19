import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth-service';
import { AuthguardService } from './authguard.service';
import { BookComponent } from './book/book.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateValuesComponent } from './update-values/update-values.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    NotfoundComponent,
    UpdateValuesComponent,
    LoginComponent,
    BookComponent,
    EmployeeComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthguardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
