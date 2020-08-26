import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FetchById } from '../models/FetchById';

@Component({
  selector: 'app-view-loan-by-id',
  templateUrl: './view-loan-by-id.component.html',
  styleUrls: ['./view-loan-by-id.component.css']
})
export class ViewLoanByIdComponent implements OnInit {
  viewLoanById = new FetchById();
  loanDetails:any;
  id:number;
  constructor(private seeLoan:LoginserviceService) {
    this.id = parseInt(sessionStorage.customerId);
    console.log(this.id);
    // this.viewLoanById.id= parseInt(sessionStorage.customerId);
    seeLoan.viewLoanByCustomerId(this.id).subscribe(data=>{
      this.loanDetails=data;
    })
  }

  ngOnInit(): void {
  }

}
