import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CustomerDetails {
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface OrderPayload {
  customer: CustomerDetails;
  paymentMethod: string;
  items: { productId: number; quantity: number; price: number }[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

    private apiUrl = 'http://localhost:5000/api/orders';

  constructor(private http: HttpClient) {}

  placeOrder(orderPayload: OrderPayload): Observable<any> {
    const token = localStorage.getItem('customerToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiUrl, orderPayload, { headers });
  }

  getCustomerDetails(customerId: string): Observable<any> {
  const token = localStorage.getItem('customerToken');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get(`http://localhost:5000/api/customers/${customerId}`, { headers });
}


// getMyOrders() {
//   return this.http.get<any>(`${this.apiUrl}/my-orders`);
// }

getMyOrders(): Observable<any> {
  const token = localStorage.getItem('customerToken');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get(`${this.apiUrl}/my-orders`, { headers });
}

  
}
