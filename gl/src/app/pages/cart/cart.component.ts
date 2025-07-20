import { Component } from '@angular/core';
import { CartItem, CartService } from '../../core-services/cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

//  products: Product[] = [
//     {
//       id: 1,
//       name: 'Luxury Leather Bag',
//       price: 250,
//       quantity: 1,
//       img: 'https://via.placeholder.com/80x80.png?text=Bag',
//     },
//     {
//       id: 2,
//       name: 'Elegant Watch',
//       price: 480,
//       quantity: 2,
//       img: 'https://via.placeholder.com/80x80.png?text=Watch',
//     },
//     // Add more products as needed
//   ];

//   get totalPrice(): number {
//     return this.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
//   }

//   updateQuantity(product: Product, event: any) {
//     const value = parseInt(event.target.value, 10);
//     if (value > 0) {
//       product.quantity = value;
//     }
//   }

//   removeProduct(productId: number) {
//     this.products = this.products.filter(p => p.id !== productId);
//   }
 products: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.products = items;
    });

    this.cartService.loadCartFromDB(); // Load cart when entering page
  }

  get totalPrice(): number {
    return this.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }

  updateQuantity(product: CartItem, event: any) {
    const qty = parseInt(event.target.value, 10);
    if (qty > 0) this.cartService.updateQuantity(product.id, qty);
  }

  removeProduct(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}