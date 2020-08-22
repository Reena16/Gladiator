import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from "../../model/ForgotPassword";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassword=new ForgotPassword();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  forgotPass(){
    //code for email validation then route to reset page else
    //throws error msg.
    this.router.navigate(['/resetPasswordLink']);
  }
}
