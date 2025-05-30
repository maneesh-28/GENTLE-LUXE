import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
totalSales = 132452;
  totalProductsSold = 40;
  monthlyRevenue = 58420;
  newCustomers = 47;

  productList = [
    {
      name: 'Luxury Linen Shirt',
      description: 'A premium quality linen shirt made with breathable fabric.',
      price: 1999,
      discount: 10,
      stock: 24,
      category: 'Apparel',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: 'Ivory White',
      image: null,
      imageUrl: 'assets/images/linen-shirt.jpg', // use actual path or bind dynamically
      status: true,
    },
    {
      name: 'Velvet Cushion Cover',
      description: 'Soft velvet cover to elevate your home decor.',
      price: 799,
      discount: 5,
      stock: 0,
      category: 'Home Decor',
      sizes: [],
      colors: 'Royal Blue',
      image: null,
      imageUrl: 'assets/images/cushion-cover.jpg',
      status: false,
    },
    {
      name: 'Organic Cotton Tote Bag',
      description: 'Eco-friendly tote bag made from 100% organic cotton.',
      price: 499,
      discount: 0,
      stock: 75,
      category: 'Accessories',
      sizes: [],
      colors: 'Natural Beige',
      image: null,
      imageUrl: 'assets/images/tote-bag.jpg',
      status: true,
    },
    // Add more products as needed
  ];
}