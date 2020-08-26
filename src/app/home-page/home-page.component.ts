import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../app.component.css']
})
export class HomePageComponent implements OnInit {
  routing:any;
  constructor() { 
  }
  apply(){}
  ngOnInit(): void {
    if(sessionStorage.getItem('customerId')!=null){
      this.routing='/customerDashboard';
    }
    else{
      this.routing='/loginLink';
    }
  }
}
