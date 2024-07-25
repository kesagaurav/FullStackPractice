import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-update-login',
  templateUrl: './update-login.component.html',
  styleUrls: ['./update-login.component.css']
})
export class UpdateLoginComponent implements OnInit {
  loginForm!: FormGroup;
  successMessage!: string;
  errorMessage!: string;
  id!:number;
  login!:Login;
  constructor(
    private build: FormBuilder,
    private service: LoginService,
    private router: Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.build.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(res=>{
      //this.loginForm=res;
      this.loginForm.patchValue(res);
    })
  }

  updateLogin(a:Login) {
    this.service.updateLogin(this.loginForm.value,this.id).subscribe({
      next: (data) => {
      //  this.loginForm.patchValue({
      //   username:data.username,
      //   password:data.password,
      //   email:data.email
      //  })
        this.router.navigate(['viewlogin']);
        this.successMessage =
          `msg is added successfully ` + this.loginForm.value;
      },
      error: (err) => {
        this.errorMessage = `somethig went wrong pls,try again !!!`;
      },
    });
  }
}
