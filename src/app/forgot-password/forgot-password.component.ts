import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  forgotPass(){
    //code for email validation then route to reset page else
    //throws error msg.
    this.router.navigate(['/resetPasswordLink']);
  }
}
