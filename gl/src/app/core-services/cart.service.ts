import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
  productId?: number; // optional, useful for backend matching
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
 private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  private apiUrl = 'http://localhost:5000/api/cart';

  constructor(private http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: any): void {
    const existing = this.cartItems.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      const item: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        img: product.imageUrl || product.img,
      };
      this.cartItems.push(item);
    }

    this.cartSubject.next(this.cartItems);
    this.saveCartToDB();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(p => p.id === productId);
    if (item) item.quantity = quantity;
    this.cartSubject.next(this.cartItems);
    this.saveCartToDB();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
    this.cartSubject.next(this.cartItems);
    this.saveCartToDB();
  }

  saveCartToDB(): void {
    const token = localStorage.getItem('customerToken');
    if (!token) return;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const payload = { items: this.cartItems };

    this.http.post(`${this.apiUrl}/save`, payload, { headers }).subscribe({
      next: res => console.log('Cart saved to DB', res),
      error: err => console.error('Failed to save cart', err),
    });
  }

  loadCartFromDB(): void {
    const token = localStorage.getItem('customerToken');
    if (!token) return;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<{ items: CartItem[] }>(this.apiUrl, { headers }).subscribe({
      next: res => {
        this.cartItems = res?.items || [];
        this.cartSubject.next(this.cartItems);
      },
      error: err => console.error('Failed to load cart', err),
    });
  }

  clearCart(): void {
  this.cartItems = [];
  this.cartSubject.next([]);
}

}