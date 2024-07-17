import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Employee } from './../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {


  registerForm!:FormGroup;
   employee!:Employee;
   submitted!:boolean;


  constructor(private builder:FormBuilder,private service:ServiceService,private route:Router) {

  }
  ngOnInit(): void {
    console.log(this.registerForm.get('firstName')?.value);
    this.registerForm=this.builder.group({
      id:['',[Validators.required]],
      firstName:['',[Validators.required,Validators.min(6)]],
      lastName:['',[Validators.required,Validators.min(6)]],
      email:['',[Validators.required,Validators.email]],
      phoneno:['',[Validators.required,this.validPhone]],
      password:['',[Validators.required,this.validPassword]]


    })


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


  validPassword(c:FormControl){
    let isPass=/^[a-zA-Z0-9]{6,10}$/;
    return isPass.test(c.value)? null:{
      passwordisInvalid:{
        message:"msg is invlaid"
      }
    };

  }


  validPhone(c:FormControl){
    let isPhone=/^[0-9]{10}$/;
    return isPhone.test(c.value) ? null :{
      phoneIsInvalid:{
        gaurav:'phone is invalid pls try again'
      }
    };
  }

  saveEmployee(e:Employee){

  }



}
