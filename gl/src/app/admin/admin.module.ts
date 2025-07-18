import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SummaryComponent } from './summary/summary.component';
import { RecentordersComponent } from './recentorders/recentorders.component';
import { ConfirmordersComponent } from './confirmorders/confirmorders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MyProductsComponent } from './my-products/my-products.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    AddproductComponent,
    SummaryComponent,
    RecentordersComponent,
    ConfirmordersComponent,
    LoginComponent,
    MyProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
