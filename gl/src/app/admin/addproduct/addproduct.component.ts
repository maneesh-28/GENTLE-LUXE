import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../core-services/product.service';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
 product: any = {
    name: '',
    description: '',
    price: null,
    discount: null,
    stock: null,
    category: '',
    sizes: [],
    colors: '',
    status: true
  };

  selectedFile: File | null = null;

  constructor(private addProductService: ProductService,
    private router: Router) {}

  toggleSize(size: string) {
    const index = this.product.sizes.indexOf(size);
    if (index > -1) {
      this.product.sizes.splice(index, 1);
    } else {
      this.product.sizes.push(size);
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();

    for (const key in this.product) {
      if (Array.isArray(this.product[key])) {
        formData.append(key, JSON.stringify(this.product[key]));
      } else {
        formData.append(key, this.product[key]);
      }
    }

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.addProductService.addProduct(formData).subscribe({
      next: () => {
        alert('Product added successfully');
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        console.error(err);
        alert('Error adding product');
      }
    });
  }
}