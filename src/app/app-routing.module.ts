import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { LoanApplicationComponent} from './loan-application/loan-application.component';
import { UpdateProfileComponent } from "./update-profile/update-profile.component";

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
  },
  {
    path:'resetPasswordLink',component:ResetPasswordComponent
  },
  {
    path:'registerLink',component:RegisterComponent
  },
  {
  path:'dashboardAdmin',component:DashboardAdminComponent
  },{
     path:'viewAllUser',component:ViewAllUsersComponent
  },
  {
    path:'updateDetails',component:UpdateDetailsComponent
  },
  {
  path:'customerDashboard',component:CustomerDashboardComponent
    
  },
  {
    
      path:'loanapplicationlink',component:LoanApplicationComponent
  },
  {
    
    path:'updateUserProfile',component:UpdateProfileComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
