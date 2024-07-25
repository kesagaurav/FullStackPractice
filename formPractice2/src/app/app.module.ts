import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BetterDemoDirective } from './Directives/better-demo.directive';
import { CustomDirective } from './Directives/custom.directive';
import { DirectivesDemoDirective } from './Directives/directives-demo.directive';
import { PracticeDirective } from './Directives/practice.directive';
import { Practice2Directive } from './Directives/practice2.directive';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { CourseComponentUsingOutputDecoratorComponent } from './course-component-using-output-decorator/course-component-using-output-decorator.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

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
    DirectiveDemoComponent,
    BetterDemoDirective,
    PracticeDirective,
    Practice2Directive,
    InputDecoratorComponent,
    CourseComponentUsingOutputDecoratorComponent,
    PipesDemoComponent

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
