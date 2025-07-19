import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    const existing = this.cartItems.find(p => p.id === product.id);
    if (existing) {
      existing.quantity! += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  updateQuantity(productId: number, quantity: number) {
    const product = this.cartItems.find(p => p.id === productId);
    if (product) {
      product.quantity = quantity;
      this.cartSubject.next(this.cartItems);
    }
  }

  removeProduct(productId: number) {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
    this.cartSubject.next(this.cartItems);
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0);
  }
}
