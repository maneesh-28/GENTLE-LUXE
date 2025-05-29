import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path :'cart', component : CartComponent},
  { path :'checkout', component : CheckoutComponent},
  { path :'product-details', component : ProductDetailsComponent},
  { path :'order-confirmation', component : OrderConfirmationComponent },
  { path :'my-orders', component : MyOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
