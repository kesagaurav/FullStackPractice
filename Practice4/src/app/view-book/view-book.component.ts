import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  books!:Book[];
  constructor(private service:BookService,private router:Router) {

  }
  ngOnInit(): void {
    this.service.getAllBooks().subscribe(res=>{
      this.books=res;
    })
  }

  updateBook(id:number){
    return this.router.navigate(['/updateBook',id]);
  }

}
