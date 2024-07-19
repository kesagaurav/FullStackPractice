import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
id="gaurav"
id1=""
date!:Date;
age!:any;
 a=new Date().getFullYear();
red: any;
isValid!: any;
color='green';
constructor(){
  console.log(this.a);

}

changeColor=this.isValid;



bornYear(){
  this.a=this.a-this.age;
}
}
