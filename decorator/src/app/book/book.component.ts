import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input('gaurav') book!: Book;
  @Input('id') id!: number;
  @Input('book') book1!: Book;
  constructor(private service: BookService, private router: Router) {
    this.book1 = new Book();
  }

  addBook(b: Book) {
    let b1 = this.service.addBook(b);
    of(b1).subscribe((res) => {
      this.router.navigate(['/view']);
      console.log(b);
    });
  }
}
