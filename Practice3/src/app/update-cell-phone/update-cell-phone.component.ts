import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CellPhone } from '../cell-phone';
import { CellPhoneService } from '../cell-phone.service';

@Component({
  selector: 'app-update-cell-phone',
  templateUrl: './update-cell-phone.component.html',
  styleUrls: ['./update-cell-phone.component.css']
})
export class UpdateCellPhoneComponent implements OnInit{

  cellPhoneForm!:FormGroup;
  id!:number;
  cellPhone!:CellPhone;
  constructor(private service:CellPhoneService,private route:ActivatedRoute,private router:Router,private build:FormBuilder) {

  }

  ngOnInit(): void {
    this.cellPhoneForm=this.build.group({
      cellPhoneName:['',[Validators.required]],
      model:['',[Validators.required]],
      price:['',[Validators.required]],
      cellPhoneTypes:['',[Validators.required]]
    })
    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(res=>{
      this.cellPhoneForm.patchValue(res);
    })
  }


  updateForm(c:CellPhone){
    this.service.updateCell(this.cellPhoneForm.value,this.id).subscribe(res=>{
      //res=this.cellPhoneForm.value;
      this.router.navigate(['viewcell']);
    });
  }

}
