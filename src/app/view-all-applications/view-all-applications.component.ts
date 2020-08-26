import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';


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

  validateCustomer(applicationId){
    this.adminService.validateCustomer(applicationId).subscribe(data=>{
      alert(JSON.stringify(data));
    })
    location.reload();
  }
  rejectCustomer(applicationId){
    this.adminService.rejectCustomer(applicationId).subscribe(data=>{
      alert(JSON.stringify(data));
    })
    location.reload();
  }

  ngOnInit(): void {
  }

}
