import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

 product = {
    title: 'Elegant Satin Dress',
    price: 3499,
    description: 'A luxurious satin midi dress, perfect for elegant occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#28221E', '#614E41', '#7F6951'],
    images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
    care: 'Dry clean only',
    material: '100% Satin',
    returnPolicy: '10-day return with original tags',
  };

  selectedImage = this.product.images[0];
  selectedSize = '';
  selectedColor = '';
  quantity = 1;

  decreaseQuantity() {
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increaseQuantity() {
    this.quantity++;
  }

  addToCart() {
    console.log('Add to cart:', {
      product: this.product.title,
      selectedSize: this.selectedSize,
      selectedColor: this.selectedColor,
      quantity: this.quantity,
    });
    alert('Added to cart!');
  }
}