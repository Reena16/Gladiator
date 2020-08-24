import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AdminUpdate } from "../models/AdminUpdate";
@Injectable({
  providedIn: 'root'
})
export class UpdateAdminDetailsService {

  constructor(private http:HttpClient) { }

  // findId(id):Observable<AdminUpdate>{
  //   let url="http://localhost:8182/updateAdmin";
  //   return this.http.post(url,id)
  // }


  update(admin:AdminUpdate):Observable<any>{
    let url="http://localhost:8182/updateAdmin";
    // let url="http://localhost:8181/adminLogin";
     return this.http.post(url,admin.adminId);
  }
}
