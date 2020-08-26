import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from "./models/login";
import { Observable } from 'rxjs';
import { ForgotPassword } from './models/forgotPassword';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http : HttpClient) { }

loginUser(login:Login):Observable<any>{

  var url = "http://localhost:8181/loginUser";
  return this.http.post(url,login);

}

forgotPassword(forgot:ForgotPassword):Observable<any>{
  let url:'http://localhost:8181/forgotPassword';
  return this.http.post(url,forgot);
}

}
