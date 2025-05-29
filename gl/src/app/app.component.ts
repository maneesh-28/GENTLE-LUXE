import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'gl';
constructor(public router: Router) {}

  shouldShowHeader(): boolean {
    const url = this.router.url;
    // Hide header ONLY 
    return url !== '/shared/404';
  }

  // shouldShowFooter(): boolean {
    // const url = this.router.url;
    // Hide footer ONLY 
    // return url !== '/shared/404' && url !=='/pages';
  // }

  shouldShowFooter(): boolean {
  const url = this.router.url;

  // Routes where footer should be hidden
  const hiddenRoutes = [
    '/shared/404',
    '/pages/cart',
    '/pages/checkout',
    '/pages/my-orders',
    '/pages/order-confirmation'
  ];

  // Hide for dynamic product details route like /pages/product-details/42
  const isProductDetails = url.startsWith('/pages/product-details/');

  return !hiddenRoutes.includes(url) && !isProductDetails;
}

}

