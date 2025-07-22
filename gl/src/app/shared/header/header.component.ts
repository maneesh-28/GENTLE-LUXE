import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router) {}

onSearch() {
  console.log('Searching for:', this.searchQuery);
  // Navigate or filter based on this.searchQuery
}
goToCart() {
    this.router.navigate(['/cart']);
}


myProfile() {
  const customerId = localStorage.getItem('customerId');
  if (customerId) {
    this.router.navigate(['/profile', customerId]);
  } else {
    alert('You are not logged in!');
  }
}

}