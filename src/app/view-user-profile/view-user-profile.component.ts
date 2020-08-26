import { Component, OnInit } from '@angular/core';
import { UpdateUserService } from '../update-user.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {

  customerName:string;
  customerSurname:string;
  id:number;
  emptype:string;
  email : string;
  dob : Date;
  city:string;
  contact:string;
  pass :string;
  customer= new Customer();

  constructor(private service:UpdateUserService) {
    this.id = parseInt(sessionStorage.customerId);
    this.service.findById(this.id).subscribe(data=>{
      console.log(data.customerId);
      this.customer = data;
      this.customerName = data.customerFirstName;
      this.customerSurname = data.customerLastName;
    //this.id = data.customerId;
      this.id = sessionStorage.customerId;
      this.email = data.customerEmail;
      this.dob = data.customerdateOfBirth;
      this.emptype = data.customerEmploymentType;
      this.city = data.customerCity;
      this.contact=data.customerMobileNumber;
      this.pass = data.customerPassword;

      //alert("Information updated successfully");
    })
  }

  ngOnInit(): void {
  }

}
