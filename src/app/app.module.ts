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
import { FusionChartsModule } from 'angular-fusioncharts';
import { FaqPageComponent } from "./faq-page/faq-page.component";
import { HttpClientModule } from '@angular/common/http';


// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load themes
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

 FusionChartsModule.fcRoot(
   FusionCharts,
   Charts,
  FusionTheme
 )

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalculatorComponent,
    LoginPageComponent,
    AdminLoginComponent,
    FaqPageComponent,
    BankInfoComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  
    RegisterComponent,
   
    TestComponent,
   
    DashboardAdminComponent,

    ViewAllUsersComponent,
   
    UpdateDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FusionChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
