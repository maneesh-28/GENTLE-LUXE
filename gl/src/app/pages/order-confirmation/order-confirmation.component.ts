import { Component } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  standalone: false,
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent {

    orderId = 'GLX-20250529-001';
  customer = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  estimatedDeliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 days from now

  products = [
    { name: 'Luxury Handbag', price: 150, quantity: 1 },
    { name: 'Premium Wallet', price: 50, quantity: 2 }
  ];

  getTotalPrice() {
    return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
  }

  trackOrder() {
    alert('Tracking feature coming soon!');
  }

}
