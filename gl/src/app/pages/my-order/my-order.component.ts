import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../core-services/checkout.service';

@Component({
  selector: 'app-my-order',
  standalone: false,
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.css'
})
export class MyOrderComponent implements OnInit{
  orders: any[] = [];
  loading = false;
  error = '';
  customerName = '';

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.loading = true;

    this.checkoutService.getMyOrders().subscribe({
      next: (res) => {
        this.orders = res.orders || [];
        this.customerName = res.orders?.[0]?.customerName || 'Customer';
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch orders:', err);
        this.error = 'Unable to fetch your orders.';
        this.loading = false;
      }
    });
  }

  getOrderTotal(order: any): number {
    return order.items.reduce((total: number, item: any) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  viewOrder(orderId: number): void {
    console.log('Viewing order ID:', orderId);
    // Future: this.router.navigate(['/order-details', orderId]);
  }
}
