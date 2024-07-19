import { Component } from '@angular/core';
import { AuthService } from './auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formPractice';

  title1="gaurav";

  colspan:string="2";

  constructor(private service:AuthService) {

  }

  isLogin(){
    return this.service.login();
  }

  isLogout(){
    return this.service.logout();
  }
}
