import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['../app.component.css']
})
export class CalculatorComponent implements OnInit {
  loanamount:any;
  tenure:any;
  tenure1:any;
  roi:any;
  roi1:any;
  emi:any;
  pow1:any;
  pow2:any;
  monthlyincome:any;
  eligibility:any;
  flag:any=true;
  flag1:any=false;
  flag2:boolean=false;
  loan:any;
  change(c:boolean){this.flag=c}
  calculateemi(form:NgForm){
    this.tenure1=this.tenure*12;
    this.roi1=this.roi/(12*100);
    this.pow1=Math.pow((1+this.roi1),this.tenure1);
    this.pow2=Math.pow((1+this.roi1),(this.tenure1))-1;
    this.emi=(this.loanamount*this.roi1*this.pow1)/this.pow2;
    this.emi=Math.round(this.emi);
    this.flag1=true;
  }
  calculateEligibility(form:NgForm){
    this.eligibility=60*(0.6*this.monthlyincome);
    this.eligibility=Math.round(this.eligibility);
    this.flag2=true;
  }
  
  constructor() { }
  ngOnInit(): void {
  }
}
