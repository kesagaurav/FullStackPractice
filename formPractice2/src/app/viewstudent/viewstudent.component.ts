import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  students!:Student[];
  studentForm!:FormGroup;
  succMsg!:string;
  errMsg!:string;
  ngOnInit(): void {
    this.getAllStudents();

  }

  constructor(private service:StudentService,private router:Router) {

  }

  getAllStudents(){
    this.service.getAllStudents().subscribe(res=>{
      this.students=res;
    })
  }

  deleteStudent(id:number){
    this.service.deleteById(id).subscribe(res=>{
      this.succMsg=id + "is deleted successfully";
    //  this.getAllStudents();
    },
    error=>{
      this.errMsg=id + " is not getting deleted pls check ";
    }
    )
  }


  updateStudent(id:number){
    this.router.navigate(['/updatestudent',id]);
  }

}
