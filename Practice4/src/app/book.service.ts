import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url='';
  constructor(private http:HttpClient) {
    this.url="http://localhost:9087/book";
  }

  addBook(b:Book):Observable<Book>{
    return this.http.post<Book>(this.url,b);
  }

  updateBook(b:Book,id:number):Observable<Book>{
    return this.http.put<Book>(this.url + `/${id}`,b);
  }

  deleteBook(id:number):Observable<any>{
    return this.http.delete(this.url + `/${id}`);
  }

  getById(id:number):Observable<any>{
    return this.http.get(this.url + `/${id}`);
  }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.url + "s");
  }
}
