import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Customer } from "../models/customer";
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPass="";
  customer:Customer = new Customer();
  data:any;
  constructor(private router: Router,private service:RegisterServiceService) { }
  pass : boolean = false;
  ngOnInit(): void {
  }
  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }
    confirmPassword():boolean {
      if (this.customer.customerPassword == this.confirmPass){
        return true;      
      }
      return false;
    }
  
    manageMobile() {
      var data = this.customer.customerMobileNumber;
      data = data.replace(/ /g, "");
      if (data.length <= 5)
      this.customer.customerMobileNumber = data;
      else
      this.customer.customerMobileNumber = data.substring(0, 5) + " " + data.substring(5, data.length);
    }


    isNumber(event, id, l) {
      var mobile = (<HTMLInputElement>document.getElementById(id));
      var data = mobile.value;
      var key = event.key;
      if (isNaN(key) || data.length > l)
        event.preventDefault();
    }
  register(){
    // alert(JSON.stringify(this.customer));
    alert("Please Check Your Mail ID for you Customer ID");
    this.service.register(this.customer).subscribe(data=>{
      this.data=data;
      console.log(data);
    })
    this.router.navigate(['/loginLink']);
    // alert(this.customer);
    // console.log(this.customer);
  }
}
