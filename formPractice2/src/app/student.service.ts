import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
url!:string;
  constructor(private http:HttpClient) {
    this.url="http://localhost:9081/student";
   }
   addStudent(s:Student):Observable<Student>{
    return this.http.post<Student>(this.url,s);
   }

   updateStudent(s:Student,id:number):Observable<Student>{
    return this.http.put<Student>(this.url + `/${id}`,s);
   }

   getById(id:number):Observable<any>{
    return this.http.get(this.url + `/${id}`);
   }

   deleteById(id:number):Observable<any>{
    return this.http.delete(this.url + `/${id}`);
   }

   getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.url + "s");
   }

}
