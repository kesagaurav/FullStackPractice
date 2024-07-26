import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  successMessage!: string;
  errorMessage!: string;
  constructor(
    private build: FormBuilder,
    private service: LoginService,
    private router: Router,
    private service2:AuthServiceService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.build.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // onSubmit() {
  //   this.service.addLogin(this.loginForm.value).subscribe({
  //     next: (data) => {
  //       data = this.loginForm.value;
  //       this.router.navigate(['viewlogin']);
  //       this.successMessage =
  //         `msg is added successfully ` + this.loginForm.value;
  //     },
  //     error: (err) => {
  //       this.errorMessage = `somethig went wrong pls,try again !!!`;
  //     },
  //   });

  // }

  onFormSubmit(){
    const uname=this.loginForm.value.username;
    const pass=this.loginForm.value.password;
   this.service2.isAuthenticated(uname,pass).subscribe({
      next:(authenticated)=>{
        if(authenticated){
          this.service.addLogin(this.loginForm.value).subscribe({
            next:data=>{
              data=this.loginForm.value;
              this.router.navigate(['/viewlogin']);
          //     this.successMessage =
          // `msg is added successfully ` + this.loginForm.value;
          // alert(this.successMessage);
            }
          })

        }
      },
      error:err=>{
        this.errorMessage=`crendtials are invalid`;
      }
    })


  }
}
