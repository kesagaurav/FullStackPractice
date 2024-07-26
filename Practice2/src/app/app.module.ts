import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewLoginComponent } from './view-login/view-login.component';
import { UpdateLoginComponent } from './update-login/update-login.component';
import { Login1Component } from './login1/login1.component';
import { Logout2Component } from './logout2/logout2.component';
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    CompanyComponent,
    ViewLoginComponent,
    UpdateLoginComponent,
    Login1Component,
    Logout2Component,
    RxjsPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
