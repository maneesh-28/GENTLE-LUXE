import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  product = {
    name: '',
    description: '',
    price: 0,
    discount: 0,
    stock: 0,
    category: '',
    sizes: [] as string[],
    colors: '',
    image: null as File | null,
    status: true
  };

  toggleSize(size: string) {
    const index = this.product.sizes.indexOf(size);
    if (index > -1) {
      this.product.sizes.splice(index, 1);
    } else {
      this.product.sizes.push(size);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.product.image = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
    formData.append('discount', this.product.discount.toString());
    formData.append('stock', this.product.stock.toString());
    formData.append('category', this.product.category);
    formData.append('sizes', JSON.stringify(this.product.sizes));
    formData.append('colors', this.product.colors);
    formData.append('status', this.product.status ? 'active' : 'inactive');

    if (this.product.image) {
      formData.append('image', this.product.image);
    }

    // Implement backend service call here
    console.log('Submitted product:', this.product);
    alert('Product submitted (check console or implement API call)');
  }
}