import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employees!:Employee[];

  employee!:Employee;
  msg!:string;
  errorMsg!:string;
  id!:number;
  updateSuccMsg!:string;
  updateFail!:string;
  ngOnInit(): void {
    this.getAllEmployees();
    this.id=this.route.snapshot.params['id'];
    // this.service.getById(this.id).subscribe(next=>{
    //   this.employee=next;

    // })
  }

  constructor(private service:ServiceService,private router:Router,private route:ActivatedRoute){}

  getAllEmployees(){
    this.service.getAllEmployees().subscribe(res=>{
      this.employees=res;
    })
  }

  deleteEmployee(id:number){
    this.service.deleteById(id).subscribe(res=>{
      //this.getAllEmployees();
      this.msg= id +  " id is deleted successfully ";

    },
    error=>{
      this.errorMsg= id + " is not deleted successfully pls check ";
    })
  }


//   updateEmployee(id:number){
//     console.log("update is " + `${id}`);

//     this.router.navigate(['/updateEmployee']);
//  }

}
