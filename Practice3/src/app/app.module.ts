import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCellPhoneComponent } from './add-cell-phone/add-cell-phone.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UpdateCellPhoneComponent } from './update-cell-phone/update-cell-phone.component';
import { ViewCellPhoneComponent } from './view-cell-phone/view-cell-phone.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCellPhoneComponent,
    UpdateCellPhoneComponent,
    ViewCellPhoneComponent,
    LoginComponent,
    PipeComponent
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
