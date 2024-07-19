import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './custom.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { DirectivesDemoDirective } from './directives-demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    ViewstudentComponent,
    UpdatestudentComponent,
    NotFoundComponent,
    CustomDirective,
    PropertyBindingComponent,
    DirectivesDemoDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
