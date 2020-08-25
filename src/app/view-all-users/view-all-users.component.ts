import { Component, OnInit } from '@angular/core';

import { AdminLoginService } from '../services/admin-login.service';


@Component({
  selector: 'app-view-all-users',
 
 templateUrl: './view-all-users.component.html',
  
styleUrls: ['./view-all-users.component.css']
})

export class ViewAllUsersComponent implements OnInit {

  
allCustomers:any;

constructor(private adminService:AdminLoginService) { 
    
adminService.viewAllCustomers().subscribe(data=>{
     
this.allCustomers=data;
    
console.log(this.allCustomers);
    })
  }
 
ngOnInit(): void {
  }


}
