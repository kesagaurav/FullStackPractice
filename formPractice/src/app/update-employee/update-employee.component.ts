import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee!: Employee;
  submitted!: boolean;
  msg!: string;
  succMsg!: string;
  id!: number;

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.employee=new Employee();
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((res) => {
      this.employee = res;
    });
  }

  submitEmployee(e: Employee) {
    this.service.updateEmployee(this.employee,this.id).subscribe({
      next: (data) => {
        this.employee = data;
        console.log(this.employee);

        this.router.navigate(['/viewEmployee']);
      },
      error: (err) => {
        this.msg = 'wrong !';
      },
      complete() {
        console.log('updated successfully');
      },
    });
  }
}
