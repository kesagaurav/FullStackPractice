import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth2Service } from '../auth2.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit{
  loginForm1!:FormGroup;
  successMessage!:string;

  constructor(private build:FormBuilder,private router:Router,private service:Auth2Service) {

  }
  ngOnInit(): void {
    this.loginForm1=this.build.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(){
    const uname=this.loginForm1.value.username;
    const pass=this.loginForm1.value.password;
    this.service.isAuthenticated(uname,pass).subscribe(res=>{
        if(res){
          this.router.navigate(['/logout2']);
          res=this.loginForm1.value;
          console.log(uname,pass);

          this.successMessage='message is added successfully';
          alert(this.successMessage);
        }
    })

  }

}
