import { Component, OnInit } from '@angular/core';
import { AdminUpdate } from "../models/AdminUpdate";
import { Router } from '@angular/router';
import { UpdateAdminDetailsService } from "../services/update-admin-details.service";
@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  adId:string;
  updateAdmin: AdminUpdate = new AdminUpdate();
  data:any;
  date:Date;
  constructor(private router: Router,private service:UpdateAdminDetailsService) { }

  ngOnInit(): void {
    this.adId=sessionStorage.getItem("adminId");
    this.service.update(this.updateAdmin).subscribe(data=>{
      this.updateAdmin=data;
      console.log(this.updateAdmin);
    })
    this.router.navigate(['/updateDetails']);
  }

  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }
  
  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }
  
}
