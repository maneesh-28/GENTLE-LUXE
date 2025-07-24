import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  standalone: false,
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent {
  orderId: string;
  customer: any;
  products: any[];
  estimatedDeliveryDate: Date = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as {
      orderId: string;
      customer: any;
      products: any[];
    };

    this.orderId = state?.orderId || 'N/A';
    this.customer = state?.customer || { name: 'Guest', email: '' };
    this.products = state?.products || [];
  }

  getTotalPrice() {
    return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
  }

  trackOrder() {
    alert('Tracking feature coming soon!');
  }
}
