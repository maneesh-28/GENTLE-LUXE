import { Component } from '@angular/core';
import { CartItem, CartService } from '../../core-services/cart.service';
import { Router } from '@angular/router';

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
 products: CartItem[] = [];

  constructor(private cartService: CartService,
    private router: Router
  ) {}

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

  goToCheckout() {
  const customerId = localStorage.getItem('customerId');
  if (customerId) {
    this.router.navigate(['/checkout']);
  } else {
    this.router.navigate(['/auth/login']);
  }
}

}