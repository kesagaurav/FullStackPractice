import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    productForm!:FormGroup;
    succMsg!:string;
    err!:string;
    constructor(private builder:FormBuilder,private router:Router,private service:ProductService) {

    }
  ngOnInit(): void {
    this.productForm=this.builder.group({
      price:['',[Validators.required]],
      prodName:['',[Validators.required]],
      publishDate:['',[Validators.required]]
    })
  }

  addProduct(){
    return this.service.addProduct(this.productForm.value).subscribe({
      next:data=>{
        data=this.productForm.value;
        this.succMsg=`value added successfully`;
        alert(this.succMsg);
        this.router.navigate(['/viewProduct']);
      },
      error:err=>{
        this.err=`wrong input pls try again !!!`;
      }
    })
  }

}
