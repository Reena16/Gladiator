import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AdminLogin } from "../model/AdminLogin";
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }

  loginAdmin(login:AdminLogin):Observable<any>{
    let url="http://localhost:8888/adminLogin";
    return this.http.post(url,login);
  }
}
