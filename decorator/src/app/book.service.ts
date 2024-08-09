import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
book!:Book;
books!:Book[]
  constructor() {
    this.book=new Book();
    this.books=[];
   }

   addBook(b:Book){
    this.books.push(b);
   }

   viewBooks():Observable<Book[]>{
    return of(this.books);
   }
}
