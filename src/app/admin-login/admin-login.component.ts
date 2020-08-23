import { Component, OnInit } from '@angular/core';
import { AdminLogin } from "../models/AdminLogin";
import { AdminLoginService } from "../services/admin-login.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  login: AdminLogin = new AdminLogin();
  data:any;
  status;
  constructor(private service: AdminLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginAdmin() {
    alert(JSON.stringify(this.login));
    this.service.loginAdmin(this.login).subscribe(data => {
      alert(JSON.stringify(data));
      this.status=data;
        if(data.status=="SUCCESS"){
          let customerId= data.customerId;
          let customerName=data.name;
          sessionStorage.setItem("customerId",customerId);
          sessionStorage.setItem("customerName",customerName);
      console.log(data);
      this.router.navigate(['/dashboardAdmin']);
    }
    })
}
}