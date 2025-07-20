import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartItem, CartService } from '../../core-services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
//  currentStep = 1;
//   orderPlaced = false;

//   customer = {
//     name: '',
//     email: '',
//     address: '',
//     phone: ''
//   };

//   paymentMethod = '';
//   products = [
//     { name: 'Luxury Watch', price: 120, quantity: 1 },
//     { name: 'Elegant Bag', price: 80, quantity: 2 }
//   ];

//   getTotalPrice() {
//     return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
//   }

//   nextStep() {
//     this.currentStep++;
//   }

//   placeOrder() {
//     this.orderPlaced = true;
//   }

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

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.products = items;
    });
  }

  getTotalPrice(): number {
    return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
  }

  nextStep(): void {
    this.currentStep++;
  }

  placeOrder(): void {
    const token = localStorage.getItem('customerToken');
    if (!token) {
      alert('Please login to place an order');
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

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post('http://localhost:5000/api/orders', orderPayload, { headers }).subscribe({
      next: (res) => {
        this.orderPlaced = true;
        this.cartService.clearCart(); // Optional: clear cart on success
      },
      error: (err) => {
        console.error('Order placement failed:', err);
        alert('Order placement failed');
      }
    });
  }
}
