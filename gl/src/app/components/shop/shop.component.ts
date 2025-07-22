import { Component } from '@angular/core';
import { ProductService } from '../../core-services/product.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../core-services/cart.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  searchTerm = '';
  sortBy = 'newest';
  showFilters = false;

  filters = {
    category: '',
    size: '',
    priceRange: '',
  };

  categories: string[] = [];
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res: Product[]) => {
        this.products = res;
        this.extractCategories();
      },
      error: (err) => {
        console.error('Error loading products:', err);
      }
    });
  }

  extractCategories(): void {
    const catSet = new Set(this.products.map(p => p.category));
    this.categories = Array.from(catSet);
  }

  filteredProducts(): Product[] {
    let filtered = [...this.products];

    // Search
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }

    // Filter: category
    if (this.filters.category) {
      filtered = filtered.filter(p => p.category === this.filters.category);
    }

    // Filter: size
    if (this.filters.size) {
      filtered = filtered.filter(p =>
        Array.isArray(p.sizes) && p.sizes.includes(this.filters.size)
      );
    }

    // Filter: price range
    if (this.filters.priceRange) {
      const [minStr, maxStr] = this.filters.priceRange.split('-');
      const min = parseInt(minStr);
      const max = maxStr === '+' ? Infinity : parseInt(maxStr);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sort
    switch (this.sortBy) {
      case 'priceLowHigh':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) =>
          new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
        );
        break;
    }

    return filtered;
  }

addToCart(product: Product): void {
  this.cartService.addToCart(product);
  const snackBarRef = this.snackBar.open(`${product.name} added to cart`, 'Go to Cart', {
    duration: 3000,
  });

  snackBarRef.onAction().subscribe(() => {
    this.router.navigate(['/cart']);
  });
}

viewProduct(productId: number) {
  this.router.navigate(['/productdetails', productId]);
}
}