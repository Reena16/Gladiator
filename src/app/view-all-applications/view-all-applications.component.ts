import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Application } from '../application';

@Component({
  selector: 'app-view-all-applications',
  templateUrl: './view-all-applications.component.html',
  styleUrls: ['./view-all-applications.component.css']
})
export class ViewAllApplicationsComponent implements OnInit {

  allApplications:any;
  constructor(private adminService:AdminLoginService) { 
    adminService.viewAllusers().subscribe(data=>{
      this.allApplications=data;
    })
  }

  ngOnInit(): void {
  }

}
