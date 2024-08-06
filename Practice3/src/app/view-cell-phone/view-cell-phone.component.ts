import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CellPhone } from '../cell-phone';
import { CellPhoneService } from '../cell-phone.service';

@Component({
  selector: 'app-view-cell-phone',
  templateUrl: './view-cell-phone.component.html',
  styleUrls: ['./view-cell-phone.component.css']
})
export class ViewCellPhoneComponent implements OnInit{

  cellphones!:CellPhone[];
  constructor(private service:CellPhoneService,private router:Router) {

  }
  ngOnInit(): void {
    this.getAllCellPhones();
  }

  getAllCellPhones(){
    this.service.getAllCellPhones().subscribe(res=>{
      this.cellphones=res;
    })
  }


  updateForm(id:number){
    this.router.navigate(['updatecell',id]);
  }
}
