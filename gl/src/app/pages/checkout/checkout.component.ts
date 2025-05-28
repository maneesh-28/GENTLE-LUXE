import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
 currentStep = 1;
  orderPlaced = false;

  customer = {
    name: '',
    email: '',
    address: '',
    phone: ''
  };

  paymentMethod = '';
  products = [
    { name: 'Luxury Watch', price: 120, quantity: 1 },
    { name: 'Elegant Bag', price: 80, quantity: 2 }
  ];

  getTotalPrice() {
    return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
  }

  nextStep() {
    this.currentStep++;
  }

  placeOrder() {
    this.orderPlaced = true;
  }

}
