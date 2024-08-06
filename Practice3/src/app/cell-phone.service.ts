import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CellPhone } from './cell-phone';

@Injectable({
  providedIn: 'root'
})
export class CellPhoneService {
  url!:string;
  constructor(private httpClient:HttpClient) {
     this.url="http://localhost:9086/cellphone";
   }

   addCellPhone(c:CellPhone):Observable<CellPhone>{
    return this.httpClient.post<CellPhone>(this.url,c);
   }

   updateCell(c:CellPhone,id:number):Observable<any>{
    return this.httpClient.put(this.url + `/${id}`,c);
   }

   getById(id:number):Observable<any>{
    return this.httpClient.get(this.url + `/${id}`);
   }

   getAllCellPhones():Observable<CellPhone[]>{
    return this.httpClient.get<CellPhone[]>(this.url + "s");
   }
}
