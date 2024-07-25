import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.build.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.service.addLogin(this.loginForm.value).subscribe({
      next: (data) => {
        data = this.loginForm.value;
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
