import { Component } from '@angular/core';

interface Product {
  title: string;
  shortDescription: string;
  price: number;
  category: string;
  sizes: string[];
  image: string;
  popularity: number;
  dateAdded: Date;
}

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

  categories = ['Dresses', 'Tops', 'Skirts', 'Accessories'];
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  products: Product[] = [
    {
      title: 'Elegant Satin Dress',
      shortDescription: 'A luxurious satin midi dress.',
      price: 3499,
      category: 'Dresses',
      sizes: ['S', 'M', 'L'],
      image: 'img1.jpg',
      popularity: 120,
      dateAdded: new Date('2025-01-10'),
    },
    // more products...
  ];


  filteredProducts() {
    // Filter products based on search, category, size, priceRange and sortBy
    let filtered = this.products;

    if (this.searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    if (this.filters.category) {
      filtered = filtered.filter(p => p.category === this.filters.category);
    }

    if (this.filters.size) {
      filtered = filtered.filter(p => p.sizes.includes(this.filters.size));
    }

    if (this.filters.priceRange) {
      const [minStr, maxStr] = this.filters.priceRange.split('-');
      const min = parseInt(minStr);
      const max = maxStr === '+' ? Infinity : parseInt(maxStr);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    switch (this.sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime());
        break;
      case 'priceLowHigh':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'mostPopular':
        filtered = filtered.sort((a, b) => b.popularity - a.popularity);
        break;
    }

    return filtered;
  }

  addToCart(product: Product) {
    alert(`Added "${product.title}" to cart.`);
  }
}
