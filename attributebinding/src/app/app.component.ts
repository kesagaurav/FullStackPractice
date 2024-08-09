import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'attributebinding';

  actionName = 'gaurav';
  colspan = '2+3';
  data: any;
}
