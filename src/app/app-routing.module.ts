import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';

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
    path:'loginLink',component:CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
