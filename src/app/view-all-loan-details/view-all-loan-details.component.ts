import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';

@Component({
  selector: 'app-view-all-loan-details',
  templateUrl: './view-all-loan-details.component.html',
  styleUrls: ['./view-all-loan-details.component.css']
})
export class ViewAllLoanDetailsComponent implements OnInit {

  allLoan:any;
  constructor(private loan:AdminLoginService) {
    loan.viewAllLoan().subscribe(data=>{
      this.allLoan=data;
    })
   }

  ngOnInit(): void {
  }

}
