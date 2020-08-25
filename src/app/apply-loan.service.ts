import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplyLoanService {

  constructor(private http:HttpClient) { }

  findById(id:number):Observable<any>{
    return this.http.post("http://localhost:8181/findAUser",id);
  }
  applyloan(apply:Application){
    return this.http.post("http://localhost:8181/applyLoan",apply);
  }
  upload(formData: FormData) {
    let url='http://localhost:8181/documentUpload';
    return this.http.post(url, formData);
  }
}
