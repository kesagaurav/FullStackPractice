import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
   books!:Book[];
  constructor(private service:BookService) {

  }
ngOnInit(): void {
this.service.viewBooks().subscribe(res=>{
  this.books=res;
  console.log(" values are " + JSON.stringify(res));

});




}

}
