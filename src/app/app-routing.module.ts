import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'homeLink',component:HomePageComponent
  },
  {
    path:'calculatorLink',component:CalculatorComponent
  },
  {
    path:'FaqLink',component:FaqPageComponent
  },
  {
    path:'loginLink',component:LoginPageComponent
  },
  {
    path:'adminLink',component:AdminLoginComponent
  },
  {
    path:'infoLink',component:BankInfoComponent
  },{
    path:'forgotPasswordLink',component:ForgotPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
