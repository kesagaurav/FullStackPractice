import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm!:FormGroup;
  successMsg!:string;
  errorMsg!:string;
  id!:number;
  constructor(private builder:FormBuilder,private router:Router,private service:BookService,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.bookForm=this.builder.group({
      bookName:['',[Validators.required]],
      price:['',[Validators.required]],
      author:['',[Validators.required]],
      publishDate:['',[Validators.required]]
    });
    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(res=>{
      this.bookForm.patchValue(res);
    })
  }

  updateBook(){
    this.service.updateBook(this.bookForm.value,this.id).subscribe({
      next:data=>{
        this.successMsg=`data added succeessfully`;
        this.router.navigate(['viewBook']);
      },
      error:err=>{
        this.errorMsg=`wrong information !!!`
      }
    })
  }
}
