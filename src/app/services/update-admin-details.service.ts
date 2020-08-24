import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AdminUpdate } from "../models/AdminUpdate";
@Injectable({
  providedIn: 'root'
})
export class UpdateAdminDetailsService {

  constructor(private http:HttpClient) { }

  update(update:AdminUpdate){
    let url="http://localhost:8188/adminLogin";
    // let url="http://localhost:8181/adminLogin";
     return this.http.post(url,update);
  }
}
