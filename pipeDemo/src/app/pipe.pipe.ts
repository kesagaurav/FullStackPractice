import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';
let productList=[
  { id: '1',category:'clock'},
  { id: '2',category:'painter'},
  { id: '3',category:'flower'},
  { id: '4',category:'laptop'},

 ]
@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(product:Product[],category:string) {

    return product.filter(a=>a.category==='clock')
  }

}
