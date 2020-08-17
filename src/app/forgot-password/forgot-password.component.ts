import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public form={
    email:null
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //code for email validation then route to reset page else
    //throws error msg.
    this.router.navigate(['/resetPasswordLink']);
  }
}
