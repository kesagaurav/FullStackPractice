import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  gauravForm:FormGroup=new FormGroup({
    gid:new FormControl({value:'',disabled:true}),
    gender:new FormControl({value:'',disabled:true})

  })
  constructor(private builder:FormBuilder) {

  }
  ngOnInit(): void {
    this.gauravForm=this.builder.group({

    })
  }

}
