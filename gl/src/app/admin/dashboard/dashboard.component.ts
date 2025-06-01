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

}
