import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productForm!: FormGroup;
  succMsg!: string;
  err!: string;
  id!: number;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productForm = this.builder.group({
      price: ['', [Validators.required]],
      prodName: ['', [Validators.required]],
    });
    //this is for using patch value
    // this.id = this.route.snapshot.params['id'];
    // this.service.getById(this.id).subscribe((res) => {
    //   this.productForm.patchValue(res);
    // });
    //without using pathch value
    this.id = this.route.snapshot.params['id'];
    // this.service.getById(this.id).subscribe(res=>{
    //   // const price=this.productForm.get('price');
    //   // const prodName=this.productForm.get('prodName');
    //   // price?.setValue(res.price);
    //   // prodName?.setValue(res.prodName);
    //   const form=this.productForm.patchValue(res);
    //         console.log(res);

    // })
     this.service.getById(this.id).subscribe((res) => {
      this.productForm=this.builder.group({
        price:[res['price']],
        prodName:[res['prodName']],
        publishDate:[res['publishDate']]
      })
    });
  }

  updateProduct() {
    //using set value
    return this.service
      .updateProduct(this.productForm.value, this.id)
      .subscribe({
        next: (data) => {
          console.log(this.productForm.value);
          // this.productForm.setValue({
          //   price:data.price,
          //   prodName:data.prodName
          // })
          this.succMsg = `value added successfully`;
          alert(this.succMsg);
          this.router.navigate(['/viewProduct']);
        },
        error: (err) => {
          this.err = `wrong input pls try again !!!`;
        },
      });
  }


}
