import { Component, OnInit } from '@angular/core';
import { ApplyLoanService } from '../apply-loan.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  profilePic: any;
  customerId : any;

  constructor(private service:ApplyLoanService) { }

  ngOnInit(): void {
    this.customerId = sessionStorage.getItem('customerId');
  }

  onFileChange(event){
    this.profilePic = event.target.files[0];
  }

  upload() {
    let formData: FormData = new FormData();
    formData.append('customerId', this.customerId);
    formData.append('profilePic', this.profilePic);
    console.log(formData.get('profilePic'));
  
    this.service.upload(formData).subscribe(data => {
      alert(JSON.stringify(data));
    })
  }

}
