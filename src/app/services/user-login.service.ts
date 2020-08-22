import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CustomerLogin } from "../models/CustomerLogin";
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http:HttpClient) { }

  
  loginUser(login:CustomerLogin):Observable<any>{
    let url="http://localhost:8888/customerLogin";
    return this.http.post(url,login);
  }
}
