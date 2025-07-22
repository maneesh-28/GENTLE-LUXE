import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core-services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

//  product = {
//     title: 'Elegant Satin Dress',
//     price: 3499,
//     description: 'A luxurious satin midi dress, perfect for elegant occasions.',
//     sizes: ['XS', 'S', 'M', 'L', 'XL'],
//     colors: ['#28221E', '#614E41', '#7F6951'],
//     images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
//     care: 'Dry clean only',
//     material: '100% Satin',
//     returnPolicy: '10-day return with original tags',
//   };

//   selectedImage = this.product.images[0];
//   selectedSize = '';
//   selectedColor = '';
//   quantity = 1;

//   decreaseQuantity() {
//     this.quantity = Math.max(1, this.quantity - 1);
//   }

//   increaseQuantity() {
//     this.quantity++;
//   }

//   addToCart() {
//     console.log('Add to cart:', {
//       product: this.product.title,
//       selectedSize: this.selectedSize,
//       selectedColor: this.selectedColor,
//       quantity: this.quantity,
//     });
//     alert('Added to cart!');
//   }
 product: any;
  selectedImage: string = '';
  selectedSize: string = '';
  selectedColor: string = '';
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  // ngOnInit() {
  //   const productId = this.route.snapshot.paramMap.get('id');
  //   if (productId) {
  //     this.productService.getProductById(productId).subscribe({
  //       next: (res) => {
  //         this.product = res;
  //         this.selectedImage = this.product.images?.[0] || '';
  //       },
  //       error: (err) => {
  //         console.error('Error fetching product:', err);
  //       }
  //     });
  //   }
  // }
  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.productService.getProductById(id).subscribe({
      next: (res) => this.product = res,
      error: (err) => console.error('Failed to fetch product by id', err)
    });
  }
}


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