import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private service: AuthService,
    private router: Router,
    private builder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const unmae = this.loginForm.value.username;
    const pass = this.loginForm.value.password;
    this.service.isAutenticated(unmae, pass).subscribe({
      next:(autenticated)=>{
        if(autenticated){
          console.log(this.loginForm.value);
          alert(this.loginForm.value);

          this.router.navigate(['/viewcell']);
        }
      }
    });
  }
}
