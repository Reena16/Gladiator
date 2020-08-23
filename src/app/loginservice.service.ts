import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from "./models/login";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http : HttpClient) { }

loginUser(login:Login):Observable<any>{

  var url = "http://localhost:8181/loginUser";
  return this.http.post(url,login);

}

}
