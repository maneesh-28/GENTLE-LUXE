import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMobileMenuOpen = false;
  searchQuery: string = '';

onSearch() {
  console.log('Searching for:', this.searchQuery);
  // Navigate or filter based on this.searchQuery
}

}
