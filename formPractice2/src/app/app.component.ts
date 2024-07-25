import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "welcome to the world of full stack using angular and springboot";

  myMessage='hello welcome to the directives demo';

  studentArray=[{
    id:1,
    name:'gaurav',
    section:'A',
    gender:'male',

  }];

  elementsArray=[{
    id:1,
    name:'gaurav',
    description:'i know spring microservices'
  },
  {
    id:2,
    name:'gaurav',
    description:'i know angular '
  },
  {
    id:3,
    name:'gaurav',
    description:'completed full stack certification with good percentage'
  }
]


name!:string;

message1!:string;

registerEvent(courseName:string){
  this.message1="book is added successfully " + `${courseName}`;
}

}
