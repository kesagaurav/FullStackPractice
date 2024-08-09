import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateFormPractice';
  applyStyle=true;

  isStyle1={
    backgroudColor:'green',
    color:'blue'
  }

  isStyle2={
    backgroundColor:'yellow',
    color:'black'
  }

}
