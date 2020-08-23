import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  name:any;
  constructor() { 
    this.name=sessionStorage.getItem("adminName");
  }

  ngOnInit(): void {
  }

}
