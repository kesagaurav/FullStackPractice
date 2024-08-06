import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  msg!:string;
  constructor(private service:AuthService,private router:Router,private builder:FormBuilder) {

  }
  ngOnInit(): void {
    this.loginForm=this.builder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]

    })
  }

  login(){
    const uname=this.loginForm.value.username;
    const pass=this.loginForm.value.password;
    this.service.isAutenticated(uname,pass).subscribe(a=>{
      if(a){
        this.msg=`value added successfully`;
        //alert(this.msg);
        this.router.navigate(['logout']);


      }
    })
  }
}
