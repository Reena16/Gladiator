import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HomeLoan';
  flag:boolean=false;
  routerLink:any;
  constructor(private router:Router){
    
  }
  ngOnInit(): void {
    if(localStorage.getItem('isLogedIn')=="true"){
      this.flag=true;
    }
    if(sessionStorage.getItem('adminId')!=null){
      this.routerLink='/dashboardAdmin';
    }
    else{
      this.routerLink='/customerDashboard';
    }
  }
  
  getHome(){
    this.router.navigate(['/homeLink']);
  }
  getLogin(){
    this.router.navigate(['/loginLink']);
  }
  getRegister(){
    this.router.navigate(['/registerLink']);
  }
  getCalculator(){
    this.router.navigate(['/calculatorLink']);
  }
  
  logOut(){
    sessionStorage.clear();
    localStorage.clear();
    location.reload();
    this.router.navigate(['/homeLink']);
  }
}
