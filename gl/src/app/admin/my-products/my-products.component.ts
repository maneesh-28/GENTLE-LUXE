import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../core-services/product.service';

@Component({
  selector: 'app-my-products',
  standalone: false,
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent implements OnInit{

    uploadedProducts: Product[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchUploadedProducts();
  }

  fetchUploadedProducts(): void {
    this.isLoading = true;
    this.productService.getAdminProducts().subscribe({
      next: (products) => {
        this.uploadedProducts = products;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.errorMessage = 'Failed to load products';
        this.isLoading = false;
      }
    });
  }

  deleteProduct(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          this.uploadedProducts = this.uploadedProducts.filter(p => p.id !== productId);
        },
        error: (err) => {
          console.error('Delete failed:', err);
          alert('Failed to delete product');
        }
      });
    }
  }
}
