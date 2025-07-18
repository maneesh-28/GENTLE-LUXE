import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 activeTab = 'overview';
  sidebarOpen = false;  // initialize it

  setTab(tab: string) {
    this.activeTab = tab;

    // Close sidebar on mobile when a tab is selected
    this.sidebarOpen = false;
  }

  logout() {
  localStorage.removeItem('adminToken'); // Remove token
  // You can also clear other admin-related data here if needed
  window.location.href = '/admin/login'; // Redirect to admin login page
}
}
