import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


products = [
    {
      name: 'Linen Summer Shirt',
      description: 'Lightweight & breathable',
      price: 49,
      image: '/assets/img/product1.jpg',
    },
    {
      name: 'Classic Wide Pants',
      description: 'Relaxed elegance',
      price: 65,
      image: '/assets/img/product2.jpg',
    },
    {
      name: 'Silk Evening Dress',
      description: 'Effortless luxury',
      price: 120,
      image: '/assets/img/product3.jpg',
    },
  ];


  newArrivals = [
    {
      name: 'Everyday Tee',
      description: 'Soft, versatile',
      price: 29,
      image: '/assets/img/product4.jpg',
    },
    {
      name: 'Denim Midi Skirt',
      description: 'Retro-modern vibe',
      price: 55,
      image: '/assets/img/product5.jpg',
    },
    {
      name: 'Structured Blazer',
      description: 'Sharp and stylish',
      price: 89,
      image: '/assets/img/product6.jpg',
    },
  ];

  featuredcollection = [
    {
      name: 'Everyday Tee',
      description: 'Soft, versatile',
      price: 29,
      image: '/assets/img/product4.jpg',
    },
    {
      name: 'Denim Midi Skirt',
      description: 'Retro-modern vibe',
      price: 55,
      image: '/assets/img/product5.jpg',
    },
    {
      name: 'Structured Blazer',
      description: 'Sharp and stylish',
      price: 89,
      image: '/assets/img/product6.jpg',
    }
  ];
}




