import { Component } from '@angular/core';

@Component({
  selector: 'app-recentorders',
  standalone: false,
  templateUrl: './recentorders.component.html',
  styleUrl: './recentorders.component.css'
})
export class RecentordersComponent {

   recentOrders = [
    {
      customerName: 'Aarav Mehta',
      customerId: 'CUST001',
      productId: 'PROD101',
      productName: 'Luxury Linen Shirt',
      orderDate: '2025-05-28',
      price: 1999,
      status: 'Delivered'
    },
    {
      customerName: 'Isha Reddy',
      customerId: 'CUST002',
      productId: 'PROD102',
      productName: 'Velvet Cushion Cover',
      orderDate: '2025-05-27',
      price: 799,
      status: 'Pending'
    },
    {
      customerName: 'Rohan Gupta',
      customerId: 'CUST003',
      productId: 'PROD103',
      productName: 'Organic Cotton Tote Bag',
      orderDate: '2025-05-25',
      price: 499,
      status: 'Cancelled'
    },
    // Add more as needed
  ];

}
