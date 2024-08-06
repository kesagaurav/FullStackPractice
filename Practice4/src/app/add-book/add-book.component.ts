import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  successMsg!: string;
  errorMsg!: string;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: BookService,
    private service1:AuthService
  ) {}
  ngOnInit(): void {
    this.bookForm = this.builder.group({
      bookName: ['', [Validators.required]],
      price: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publishDate: ['', [Validators.required]],
    });
  }

  addBook() {


    this.service.addBook(this.bookForm.value).subscribe({
      next: (data) => {
        data = this.bookForm.value;
        console.log(data);

        this.successMsg = `data added succeessfully`;
        this.router.navigate(['viewBook']);
      },
      error: (err) => {
        this.errorMsg = `wrong information !!!`;
      },
    });
  }
}
