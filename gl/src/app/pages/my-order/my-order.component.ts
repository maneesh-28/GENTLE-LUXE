import { Component } from '@angular/core';

@Component({
  selector: 'app-my-order',
  standalone: false,
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.css'
})
export class MyOrderComponent {

  orders = [
    {
      id: 'GLX-001',
      date: new Date('2025-05-20'),
      status: 'Delivered',
      products: [
        { name: 'Luxury Handbag', price: 150, quantity: 1 },
        { name: 'Silk Scarf', price: 40, quantity: 2 }
      ]
    },
    {
      id: 'GLX-002',
      date: new Date('2025-05-26'),
      status: 'Confirmed',
      products: [
        { name: 'Leather Wallet', price: 60, quantity: 1 }
      ]
    },
    {
      id: 'GLX-003',
      date: new Date('2025-05-28'),
      status: 'Pending',
      products: [
        { name: 'Perfume Set', price: 120, quantity: 1 },
        { name: 'Gift Box', price: 25, quantity: 1 }
      ]
    }
  ];

  getOrderTotal(order: any): number {
    return order.products.reduce((total: number, p: any) => total + p.price * p.quantity, 0);
  }

  viewOrder(orderId: string) {
    alert(`Viewing order ${orderId}`);
    // Or navigate: this.router.navigate(['/order-details', orderId])
  }

}
