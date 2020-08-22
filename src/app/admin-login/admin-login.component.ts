import { Component, OnInit } from '@angular/core';
import { AdminLogin } from "../../model/AdminLogin";
import {  AdminLoginService} from "../../services/admin-login.service";
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  login = new AdminLogin();
  status;
  constructor(private service:AdminLoginService) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    alert(JSON.stringify(this.login));
    this.service.loginAdmin(this.login).subscribe(data=>{
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
