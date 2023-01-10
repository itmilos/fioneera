import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {FinanceComponent} from "./finance/finance.component";
import {InsuranceComponent} from "./insurance/insurance.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'insurance', component: InsuranceComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, { useHash: true })]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
