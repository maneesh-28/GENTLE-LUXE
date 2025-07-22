import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../core-services/product.service';
import { CartService } from '../../core-services/cart.service';
import { Product } from '../../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product: any;
  selectedImage: string = '';
  selectedSize: string = '';
  selectedColor: string = '';
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

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

  // addToCart() {
  //   console.log('Add to cart:', {
  //     product: this.product.title,
  //     selectedSize: this.selectedSize,
  //     selectedColor: this.selectedColor,
  //     quantity: this.quantity,
  //   });
  //   alert('Added to cart!');
  // }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    const snackBarRef = this.snackBar.open(`${product.name} added to cart`, 'Go to Cart', {
      duration: 3000,
    });
  
    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/cart']);
    });
  }
  

}