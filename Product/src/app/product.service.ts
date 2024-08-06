import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='';
  constructor(private httpClient:HttpClient) {
     this.url='http://localhost:9088/product';
  }

  addProduct(p:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.url,p);
  }

  updateProduct(p:Product,id:number):Observable<Product>{
    return this.httpClient.put<Product>(this.url + `/${id}`,p);
  }

  getById(id:number):Observable<any>{
    return this.httpClient.get(this.url + `/${id}`);
  }

  getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url + "s");
  }

}
