import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from "./models/login";
import { Observable } from 'rxjs';
import { FetchById } from './models/FetchById';
import { SendStatusDto } from './models/StatusSendDto';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  loginUser(login: Login): Observable<any> {
    var url = "http://localhost:8181/loginUser";
    return this.http.post(url, login);
  }

  viewLoanByCustomerId(id): Observable<any> {
    let url = "http://localhost:8181/viewLoanByCustomerId";
    return this.http.post(url, id);
  }

  viewStatus(searchData:SendStatusDto):Observable<any>{
    let url="http://localhost:8181/searchStatus";
    return this.http.post(url,searchData);
  }
}
