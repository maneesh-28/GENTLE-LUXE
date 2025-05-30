import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmorders',
  standalone: false,
  templateUrl: './confirmorders.component.html',
  styleUrl: './confirmorders.component.css'
})
export class ConfirmordersComponent {

    order = {
    customerId: 'CUST001',
    customerName: 'Aarav Mehta',
    productId: 'PROD101',
    productName: 'Luxury Linen Shirt',
    orderDate: '2025-05-31',
    price: 1999,
    size: 'M',
    color: 'Blue',
    imageUrl: 'https://via.placeholder.com/150' // replace with actual image URL
  };

  confirmOrder() {
    alert('Order confirmed!');
    // Add your confirmation logic here
  }

  cancelOrder() {
    alert('Order cancelled!');
    // Add your cancellation logic here
  }

}
