import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-values',
  templateUrl: './update-values.component.html',
  styleUrls: ['./update-values.component.css']
})
export class UpdateValuesComponent {
  registerForm!:FormGroup;
  employee!:Employee;
  submitted!:boolean;


 constructor(private builder:FormBuilder,private router:Router) {
   this.registerForm=this.builder.group({
     id:['',[Validators.required]],
     firstName:['',[Validators.required,Validators.min(6)]],
     lastName:['',[Validators.required,Validators.min(6)]],
     email:['',[Validators.required,Validators.email]],
     phoneno:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
     password:['',[Validators.required]]


   })
 }
 ngOnInit(): void {
   console.log(this.registerForm.get('firstName')?.value);


 }

 submit(){
   console.log(this.registerForm);
   const id=this.registerForm.value.id;
   const firstName=this.registerForm.value.firstName;
   const lastName=this.registerForm.value.lastName;
   const email=this.registerForm.value.email;
   const phoneno=this.registerForm.value.phoneno;
   const password=this.registerForm.value.password;

   console.log(id,firstName,lastName,email,phoneno,password);


 }

 updateDetails(){
  this.router.navigate(['employee']);
 }
}
