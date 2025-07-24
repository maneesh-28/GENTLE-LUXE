import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../../core-services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CheckoutService } from '../../core-services/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  currentStep = 1;
  orderPlaced = false;

  customer = {
    name: '',
    email: '',
    address: '',
    phone: ''
  };

  paymentMethod = '';
  products: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
  const customerId = localStorage.getItem('customerId');
  if (customerId) {
    this.checkoutService.getCustomerDetails(customerId).subscribe({
      next: (data) => {
        this.customer = {
          name: data.name,
          email: data.email,
          address: data.address,
          phone: data.phone
        };
      },
      error: (err) => {
        console.error('Failed to load customer info:', err);
        this.toastr.warning('Could not fetch your details. Please fill them manually.', 'Warning');
      }
    });
  }

  this.cartService.getCartItems().subscribe((items) => {
    this.products = items;
  });
}


  getTotalPrice(): number {
    return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
  }

  // nextStep(): void {
  //   this.currentStep++;
  // }
  nextStep(): void {
  if (this.currentStep === 1) {
    if (
      !this.customer.name.trim() ||
      !this.customer.email.trim() ||
      !this.customer.phone.trim() ||
      !this.customer.address.trim()
    ) {
      this.toastr.warning('Please fill out all customer details.', 'Incomplete Info');
      return;
    }
  }

  if (this.currentStep === 2) {
    if (!this.paymentMethod) {
      this.toastr.warning('Please select a payment method.', 'Payment Required');
      return;
    }
  }

  this.currentStep++;
}


  placeOrder(): void {
  const token = localStorage.getItem('customerToken');
  if (!token) {
    this.toastr.error('Please login to place an order', 'Authentication Required');
    return;
  }

  if (!this.products || this.products.length === 0) {
    this.toastr.error('Your cart is empty. Please add products to continue.', 'Empty Cart');
    return;
  }

  const orderPayload = {
    customer: this.customer,
    paymentMethod: this.paymentMethod,
    items: this.products.map(p => ({
      productId: p.id,
      quantity: p.quantity,
      price: p.price
    })),
    total: this.getTotalPrice()
  };

  this.checkoutService.placeOrder(orderPayload).subscribe({
    next: () => {
      this.orderPlaced = true;
      // this.cartService.clearCart();
      this.toastr.success('Order placed successfully!', 'Success 🎉');
      this.router.navigate(['/order-confirmation'], {
  state: {
    orderId: this.generateOrderId(), // Optional - you can use a function or real ID from backend
    customer: this.customer,
    products: this.products
  }
    });
    },
    error: (err) => {
      // console.error('Order placement failed:', err);
      this.toastr.error('Order placement failed. Please try again.', 'Error');
    }
  });
}

generateOrderId(): string {
  const now = new Date();
  return `GLX-${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${Math.floor(
    100 + Math.random() * 900
  )}`;
}

}
