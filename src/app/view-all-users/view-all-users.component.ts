import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  customer:Customer=new Customer();
  data:any;
  constructor() { }

  ngOnInit(): void {
  }

  getData(){

  }
  getCustomer(){
    
  }
}
