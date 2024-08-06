import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from './notfound.component';


@NgModule({
  declarations: [NotfoundComponent,Child1Component,Child2Component],
  imports: [
    CommonModule,
    NotfoundRoutingModule
  ]
})
export class NotfoundModule { }
