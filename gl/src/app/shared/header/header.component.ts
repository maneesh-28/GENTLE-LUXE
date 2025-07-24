import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMobileMenuOpen = false;
  searchQuery: string = '';

  constructor (
    private router: Router, private toastr: ToastrService) {}

onSearch() {
  console.log('Searching for:', this.searchQuery);
  // Navigate or filter based on this.searchQuery
  
}

goToCart() {
    const customerId = localStorage.getItem('customerId');
    if (customerId) {
      this.router.navigate(['/cart']);
    } else {
      this.toastr.warning('Please log in to view your cart', 'Not Logged In');
      this.router.navigate(['/auth/login']);
    }
  }

  myProfile() {
    const customerId = localStorage.getItem('customerId');
    if (customerId) {
      this.router.navigate(['/profile', customerId]);
    } else {
      this.toastr.error('You are not logged in!', 'Access Denied');
      this.router.navigate(['/auth/login']);
    }
  }

  goToShop() {
  this.router.navigate(['/shop']);
  // const customerId = localStorage.getItem('customerId');
  //   if (customerId) {
  //     this.router.navigate(['/shop', customerId]);
  //   } else {
  //     this.toastr.error('You are not logged in!', 'Access Denied');
  //     this.router.navigate(['/auth/login']);
  //   }
  }


  goToHome() {
  this.router.navigate(['/home']);
  // const customerId = localStorage.getItem('customerId');
  //   if (customerId) {
  //     this.router.navigate(['/home']);
  //   } else {
  //     this.toastr.error('You are not logged in!', 'Access Denied');
  //     this.router.navigate(['/auth/login']);
  //   }
}



}