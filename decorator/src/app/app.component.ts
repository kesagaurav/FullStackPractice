import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decorator';
  bookElements=[{bid:1,name:'tim buchaka',content:'java'}]
  //bookElements!:Book[];
  id=123;
  serverElements={type:"gaurav",name:'kg',content:'good'}
  serverElements1=[{type:"gaurav",name:'kg',content:'good'}]
  //books!:Book[];

  onserverAdded(serverData:{name:string,content:string}){
    this.serverElements1.push({
      type:'gaurav',
      name:serverData.name,
      content:serverData.content
    })
    console.log(this.serverElements1);

  }

}
