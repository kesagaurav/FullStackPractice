import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit{

  student!:Student;
  id!:number;
  studentForm!:FormGroup;

  constructor(private service:StudentService,private route:ActivatedRoute,private router:Router,private builder:FormBuilder) {

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((res)=>{
      this.student=res;



  });

  this.studentForm=this.builder.group({
    id:['',[Validators.required]],
    studentName:[this.student?.studentName,[Validators.required,Validators.maxLength(6)]],
    schoolName:['',[Validators.required,Validators.maxLength(4)]],
    schoolSection:['',[Validators.required]],
    age:['',[Validators.required]],
    location:['',[Validators.required,Validators.minLength(4)]],
    gender:['',[Validators.required]]

  })

  }

  // updateStudent(s:Student){
  //   this.service.updateStudent(this.studentForm.value,this.id).subscribe({
  //     next:data=>{
  //       this.student=data;
  //       this.router.navigate(['/viewstudent']);
  //     },
  //     error:err=>{
  //       console.log("soemthing went eroing");

  //     }
  //   })
  // }


  updateStudent(s:Student){
    this.service.updateStudent(this.studentForm.value,this.id).subscribe({
      next:data=>{
        this.studentForm.patchValue({
          studentName:data.studentName,
          schoolName:data.schoolName,
          age:data.age,
          location:data.location,

        })
        this.router.navigate(['/viewstudent']);
      },
      error:err=>{
        console.log("soemthing went eroing");

      }
    })
  }



}
