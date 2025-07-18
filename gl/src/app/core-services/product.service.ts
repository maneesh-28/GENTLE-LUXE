import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  addProduct(formData: FormData) {
    const token = localStorage.getItem('adminToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.baseUrl}`, formData, { headers });
  }

  // get admin products
  getAdminProducts() {
    const token = localStorage.getItem('adminToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<Product[]>(`${this.baseUrl}`, { headers });
  }

  deleteProduct(productId: number) {
    const token = localStorage.getItem('adminToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.delete(`${this.baseUrl}/${productId}`, { headers });
  }

}

