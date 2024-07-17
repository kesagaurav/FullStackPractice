import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = '';
  constructor(private client: HttpClient) {
    this.url = 'http://localhost:9080/employee';
  }
  createEmployee(e: Employee): Observable<Employee> {
    return this.client.post<Employee>(this.url, e);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.client.get<Employee[]>(this.url + 's');
  }

  updateEmployee(e:Employee):Observable<any>{
    return this.client.put(this.url,e);
  }

  getById(id: number): Observable<Employee> {
    return this.client.get<Employee>(this.url + `/${id}`);
  }
  deleteById(id: number): Observable<number> {
    return this.client.delete<number>(this.url + `/${id}`);
  }
}
