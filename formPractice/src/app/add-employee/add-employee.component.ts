import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee!:Employee;
   submitted!:boolean;
   msg!:string;


  constructor(private builder:FormBuilder,private service:ServiceService,private route:Router) {
    this.employee=new Employee();
  }
  saveEmployee():void{
     this.service.createEmployee(this.employee).subscribe(next=>{

      this.employee=new Employee();
      this.route.navigate(['/viewEmployee']);
    },
    error=>{
      this.msg="something went wrong pls try again";
    }
    )
  }
}
