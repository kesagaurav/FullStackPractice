import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CellPhoneService } from '../cell-phone.service';

@Component({
  selector: 'app-add-cell-phone',
  templateUrl: './add-cell-phone.component.html',
  styleUrls: ['./add-cell-phone.component.css']
})
export class AddCellPhoneComponent implements OnInit{

  cellForm!:FormGroup;
  succeesMsg!:string;
  errorMsg!:string;

    constructor(private build:FormBuilder,private router:Router,private service:CellPhoneService) {

    }

  ngOnInit(): void {
    this.cellForm=this.build.group({
      cellPhoneName:['',[Validators.required]],
      model:['',[Validators.required]],
      price:['',[Validators.required]],
      cellPhoneTypes:['',[Validators.required]],
      date:['',[Validators.required]]
    })
  }

  submit(){
    this.errorMsg='';
    this.succeesMsg='';
    this.service.addCellPhone(this.cellForm.value).subscribe(
      {
        next:data=>{
          data=this.cellForm.value;
          this.succeesMsg=`cell phone added successfully`;
          this.router.navigate(['viewcell']);
        },
        error:err=>{
          this.errorMsg=`wrong details pls update !!!`
        }
      }
    )
  }

}
