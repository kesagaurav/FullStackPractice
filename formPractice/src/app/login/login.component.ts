import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private builder: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, this.password]],
    });
  }

  password(c: FormControl) {
    const isPass = /^[a-z]{10}$/;
    return isPass.test(c.value)
      ? null
      : {
          passIsInvalid: {
            msg: 'invalid credentails',
          },
        };
  }
}
