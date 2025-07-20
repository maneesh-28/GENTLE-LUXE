import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'gl';
  isLoading = true;
  hideHeader: boolean = false;

    ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Preloader visible for 3 seconds
  }


constructor(public router: Router) {// Watch route changes
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.hideHeader = currentRoute.includes('/login') || currentRoute.includes('/register') || currentRoute.includes('/owner');
    });
  }

//  shouldShowHeader(): boolean {
//   const url = this.router.url;

//   const hiddenRoutes = [
//     '/auth/login',
//     '/auth/register',
//     '/admin/login',
//     '/shared/404',
//      '/admin/dashboard',
//   ];

//   return !hiddenRoutes.includes(url);
// }

//   shouldShowFooter(): boolean {
//   const url = this.router.url;

//   const hiddenRoutes = [
//     '/auth/login',
//     '/auth/register',
//      '/admin/login',
//     '/shared/404',
//     '/cart',
//     '/pages/checkout',
//     '/pages/my-orders',
//     '/pages/order-confirmation',
//      '/admin/dashboard',
//   ];

//   const isProductDetails = url.startsWith('/pages/product-details/');

//   return !hiddenRoutes.includes(url) && !isProductDetails;
// }

}

