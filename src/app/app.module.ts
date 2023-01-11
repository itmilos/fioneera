import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FinanceComponent } from './finance/finance.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import {FundamentalNgxCoreModule, WizardService} from "@fundamental-ngx/core";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FinanceComponent,
    InsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FundamentalNgxCoreModule,
  ],
  providers: [WizardService],
  bootstrap: [AppComponent]
})
export class AppModule {


constructor(themingService: ThemingService) {
themingService.init();
}
}
