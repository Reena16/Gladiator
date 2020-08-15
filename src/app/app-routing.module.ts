import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

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
    path:'loginLink',component:LoginPageComponent
  },
  {
    path:'adminLink',component:AdminLoginComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
