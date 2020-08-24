import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  customerName:string;
  customer= new Customer();
  constructor() { }

  ngOnInit(): void {
    this.customerName = sessionStorage.getItem("customerFirstName");
  }
  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
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
  update(){

  }

}
