import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AdminLogin } from "../models/AdminLogin";
import { Application } from '../application';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }

  loginAdmin(login:AdminLogin):Observable<any>{
   // let url="http://localhost:8182/adminLogin";
    let url="http://localhost:8181/adminLogin";
    return this.http.post(url,login);
  }
  viewAllusers(){
    let url="http://localhost:8181/viewAllApplications";
    return this.http.get(url);
  }
}
