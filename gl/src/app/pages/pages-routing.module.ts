import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path :'cart', component : CartComponent, canActivate: [AuthGuard]},
  { path :'checkout', component : CheckoutComponent, canActivate: [AuthGuard]},
  { path :'product-details', component : ProductDetailsComponent, canActivate: [AuthGuard]},
  { path :'order-confirmation', component : OrderConfirmationComponent, canActivate: [AuthGuard] },
  { path :'my-orders', component : MyOrderComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
