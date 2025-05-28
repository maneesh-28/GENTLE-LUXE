import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path :'home', component : HomeComponent},
  { path :'about', component : AboutusComponent},
  { path :'cart', component : CartComponent},
  { path :'checkout', component : CheckoutComponent},
  { path :'shop', component : ShopComponent},
  { path :'product-details', component : ProductDetailsComponent},
  { path :'contact', component : ContactComponent},
  { path :'order-confirmation', component : OrderconfirmationComponent }
  { path :'my-orders', component : My },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
