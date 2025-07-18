import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { SummaryComponent } from './summary/summary.component';
import { ConfirmordersComponent } from './confirmorders/confirmorders.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RecentordersComponent } from './recentorders/recentorders.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from '../guards/admin.guard';
import { MyProductsComponent } from './my-products/my-products.component';

const routes: Routes = [
  {path: 'login', component :LoginComponent },
  {path: 'dashboard', component :DashboardComponent, canActivate: [AdminGuard]},
  {path: 'overview', component :OverviewComponent, canActivate: [AdminGuard]},
  {path: 'summary', component :SummaryComponent, canActivate: [AdminGuard]},
  {path: 'confirm-order', component :ConfirmordersComponent, canActivate: [AdminGuard]},
  {path: 'addproduct', component :AddproductComponent, canActivate: [AdminGuard]},
  {path: 'myproduct', component :MyProductsComponent, canActivate: [AdminGuard]},
  {path: 'recent-orders', component :RecentordersComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
