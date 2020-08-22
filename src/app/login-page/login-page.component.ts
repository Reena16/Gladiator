import { Component, OnInit } from '@angular/core';
import { CustomerLogin } from "../../model/CustomerLogin";
import {UserLoginService  } from "../../services/user-login.service";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login=new CustomerLogin();
  status;
  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
  }

  UserLogin(){
    alert(JSON.stringify(this.login));
    this.service.loginUser(this.login).subscribe(data=>{
      this.status=data;
      if(data.status=="SUCCESS"){
        let customerId= data.adminId;
        let customerName=data.name;
        sessionStorage.setItem("customerId",customerId);
        sessionStorage.setitem("customerName",customerName);
      }
      else{
      }
    })
  }
}
