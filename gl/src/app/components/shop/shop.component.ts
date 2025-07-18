import { Component } from '@angular/core';
import { ProductService } from '../../core-services/product.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

//    searchTerm = '';
//   sortBy = 'newest';

//   showFilters = false;

//   filters = {
//     category: '',
//     size: '',
//     priceRange: '',
//   };

//   categories = ['Dresses', 'Tops', 'Skirts', 'Accessories'];
//   sizes = ['XS', 'S', 'M', 'L', 'XL'];

//   products: Product[] = [
//     {
//       title: 'Elegant Satin Dress',
//       shortDescription: 'A luxurious satin midi dress.',
//       price: 3499,
//       category: 'Dresses',
//       sizes: ['S', 'M', 'L'],
//       image: 'img1.jpg',
//       popularity: 120,
//       dateAdded: new Date('2025-01-10'),
//     },
//     // more products...
//   ];


//   filteredProducts() {
//     // Filter products based on search, category, size, priceRange and sortBy
//     let filtered = this.products;

//     if (this.searchTerm) {
//       filtered = filtered.filter(p =>
//         p.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
//     }

//     if (this.filters.category) {
//       filtered = filtered.filter(p => p.category === this.filters.category);
//     }

//     if (this.filters.size) {
//       filtered = filtered.filter(p => p.sizes.includes(this.filters.size));
//     }

//     if (this.filters.priceRange) {
//       const [minStr, maxStr] = this.filters.priceRange.split('-');
//       const min = parseInt(minStr);
//       const max = maxStr === '+' ? Infinity : parseInt(maxStr);
//       filtered = filtered.filter(p => p.price >= min && p.price <= max);
//     }

//     switch (this.sortBy) {
//       case 'newest':
//         filtered = filtered.sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime());
//         break;
//       case 'priceLowHigh':
//         filtered = filtered.sort((a, b) => a.price - b.price);
//         break;
//       case 'priceHighLow':
//         filtered = filtered.sort((a, b) => b.price - a.price);
//         break;
//       case 'mostPopular':
//         filtered = filtered.sort((a, b) => b.popularity - a.popularity);
//         break;
//     }

//     return filtered;
//   }

//   addToCart(product: Product) {
//     alert(`Added "${product.title}" to cart.`);
//   }
// }

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

  constructor(private productService: ProductService) {}

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
    alert(`Added "${product.name}" to cart.`);
  }
}