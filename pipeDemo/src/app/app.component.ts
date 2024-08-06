import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeDemo';

  filter:string='';
  productList:Product[]=[
    {id:1,category:'clock'},
    {id:2,category:'painter'},
    {id:3,category:'laptop'}
  ]
  // productList:any[]=[
  //  { id: 1,category:'clock'},
  //  { id: 2,category:'painter'},
  //  { id: 3,category:'flower'},
  //  { id: 4,category:'laptop'},

  // ]




}
