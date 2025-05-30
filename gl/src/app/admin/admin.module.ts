import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SummaryComponent } from './summary/summary.component';
import { RecentordersComponent } from './recentorders/recentorders.component';
import { ConfirmordersComponent } from './confirmorders/confirmorders.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    AddproductComponent,
    SummaryComponent,
    RecentordersComponent,
    ConfirmordersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
