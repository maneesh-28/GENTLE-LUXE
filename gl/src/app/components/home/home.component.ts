import { AfterViewInit, Component, ElementRef } from '@angular/core';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

   ngAfterViewInit(): void {
    // Animate main sections on scroll (down and reverse up)
    gsap.utils.toArray('.reveal').forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out',
      });
    });

    // Animate product cards with staggered delay
    gsap.utils.toArray('.product-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.05,
        ease: 'power2.out',
      });
    });
  }

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




