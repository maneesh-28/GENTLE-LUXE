import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  editMode = false;
  previewUrl: string | ArrayBuffer | null = null;

  customer = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    profilePicture: 'assets/images/default-profile.png',
    address: '123 Gentle Street, Luxe City',
    password: ''
  };

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
        this.customer.profilePicture = this.previewUrl as string;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    this.editMode = false;
    console.log('Saved profile:', this.customer);
    // Call API to update profile if connected to backend
  }

  logout() {
    // Clear token or session and redirect
    this.router.navigate(['/auth/login']);
  }

}
