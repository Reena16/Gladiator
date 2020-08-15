import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { Aboutus1Component } from './aboutus1/aboutus1.component';

import { FaqPageComponent } from "./faq-page/faq-page.component";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalculatorComponent,
    LoginPageComponent,
    AdminLoginComponent,
    
    Aboutus1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
