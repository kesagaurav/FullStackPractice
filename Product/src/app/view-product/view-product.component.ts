import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  products!:Product[];
  constructor(private service:ProductService,private router:Router){}
  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next:data=>{
        this.products=data;
      }
    });
  }


  update(id:number){
    this.router.navigate(['/updateProduct',id]);
  }
}
