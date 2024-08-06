import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit,AfterViewChecked, DoCheck, OnChanges,AfterContentChecked,AfterContentInit,OnDestroy,AfterViewInit {
  userForm!: FormGroup;
  data="angular"
  constructor(private service: AuthService, private builder: FormBuilder,private router:Router) {
    console.log("constructor called");

  }
  ngDoCheck(): void {
    console.log('ng do checked called');
  }
  ngAfterViewChecked(): void {
    console.log("ng after view checked");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng chnages");
  }
  ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked.');

  }
  ngAfterContentInit(): void {
   console.log('ngAfterContentInit');
  }
  ngOnDestroy(): void {
   console.log('ngOnDestroy.');
  }
  ngAfterViewInit(): void {
   console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
    this.userForm = this.builder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    console.log("ng oni t called");

  }

  login() {
    const unmae=this.userForm.value.name;
    const pass=this.userForm.value.password;
    this.service.isAuthentiactaed(unmae,pass).subscribe(res=>{
      if(res){
        this.router.navigate(['viewBook']);
      }
    })

  }
}
