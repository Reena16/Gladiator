import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { UpdateUserService } from "../update-user.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  customerName:string;
  customerSurname:string;
  id:number;
  email : string;
  enteredPassword :string;
  customer= new Customer();
  constructor(private service:UpdateUserService) {
    this.id = parseInt(sessionStorage.getItem('customerId'));
    this.service.findById(this.id).subscribe(data=>{
      console.log(data);
      this.customerName = data.customerFirstName;
      this.customerSurname = data.customerLastname;
      //alert("Information updated successfully");
    })
  }


  ngOnInit(): void {
    // this.customerName = sessionStorage.getItem("customerFirstName");
    // this.customerSurname = sessionStorage.getItem("customerLastname");
    // this.id = sessionStorage.getItem('customerId');
    // this.email= sessionStorage.getItem('customerEmail');
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

  findById(){
    this.service.findById(this.customer).subscribe(data=>{
      this.customer = data;
      //alert("Information updated successfully");
    })

  }
  update(){
    this.service.update(this.customer).subscribe(data=>{
      alert("Information updated successfully");
    })

  }

}
