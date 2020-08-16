import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { enableProdMode } from '@angular/core'

import { FaqPageComponent } from "./faq-page/faq-page.component";




import { BankInfoComponent } from './bank-info/bank-info.component';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalculatorComponent,
    LoginPageComponent,
    AdminLoginComponent,
    FaqPageComponent,
    BankInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
