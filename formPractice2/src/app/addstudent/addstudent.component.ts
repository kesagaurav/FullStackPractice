import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  registerForm!:FormGroup;
  errorMsg!:string;
  succMsg!:string;
  student!:Student;

  constructor(private service:StudentService,private router:Router,private builder:FormBuilder) {
    this.student=new Student();
  }

  ngOnInit(): void {
    this.registerForm=this.builder.group({
      id:['',[Validators.required]],
      studentName:['',[Validators.required,Validators.maxLength(6)]],
      schoolName:['',[Validators.required,Validators.maxLength(4)]],
      schoolSection:['',[Validators.required]],
      age:['',[Validators.required]],
      location:['',[Validators.required,Validators.minLength(4)]],
      gender:['',[Validators.required]]

    })
  }


  addStudent(){
    return this.service.addStudent(this.registerForm.value).subscribe({
      next:data=>{
        this.student=new Student();
        this.succMsg="msg is saved successfully " + this.student;
        this.router.navigate(['/viewstudent']);
      },
      error:err=>{
        this.errorMsg="wrong details pls check !";
      }
    }

    );
  }

}
