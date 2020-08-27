import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from "../models/forgotPassword";
import { LoginserviceService } from "../loginservice.service";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgot: ForgotPassword = new ForgotPassword();
  message: string;
  constructor(private router: Router, private service: LoginserviceService) { }

  ngOnInit(): void {
  }
  forgotPass() {
    console.log(this.forgot);
    this.service.forgotPassword(this.forgot).subscribe(data => {
      this.forgot.email = data;
      if (data.status == 'SUCCESS') {
        this.message = data.message;
        console.log(this.message);
        this.router.navigate(['resetPasswordLink']);
      } else {
        this.message = data.message;
      }
    })
  }
}
