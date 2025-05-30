import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { SummaryComponent } from './summary/summary.component';
import { ConfirmordersComponent } from './confirmorders/confirmorders.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RecentordersComponent } from './recentorders/recentorders.component';

const routes: Routes = [
  {path: 'dashboard', component :DashboardComponent},
  {path: 'overview', component :OverviewComponent},
  {path: 'summary', component :SummaryComponent},
  {path: 'confirm-order', component :ConfirmordersComponent},
  {path: 'addproduct', component :AddproductComponent},
  {path: 'recent-orders', component :RecentordersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
