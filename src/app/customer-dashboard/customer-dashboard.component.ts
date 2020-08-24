import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  customerName:string;
  customerSurname:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.customerName=sessionStorage.getItem("customerFirstName");
    this.customerSurname=sessionStorage.getItem("customerLastName");

  }
  application(){
    this.router.navigate(['loanapplicationlink']);

  }

}
