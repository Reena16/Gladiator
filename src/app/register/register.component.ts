import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Customer } from "../models/customer";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer:Customer;
  constructor(private router: Router) { }
  pass : boolean = false;
  ngOnInit(): void {
  }
  
  register(){
    

  }
}
