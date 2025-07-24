import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../core-services/customer.service';
import { AuthService } from '../../core-services/auth.service';


@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  editMode = false;
  previewUrl: string | ArrayBuffer | null = null;
  custId: string = '';
  selectedFile: File | null = null;

  customer = {
    fullName: '',
    email: '',
    phone: '',
    profilePicture: '',
    address: '',
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.custId = this.route.snapshot.paramMap.get('cust_id') || '';
    this.fetchProfile(this.custId);
  }

  fetchProfile(id: string) {
    this.customerService.getCustomerById(id).subscribe(
      (res) => {
        this.customer = res;
      },
      (err) => {
        console.error('Failed to fetch profile:', err);
      }
    );
  }

   onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
        this.customer.profilePicture = this.previewUrl as string;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    const formData = new FormData();
    formData.append('fullName', this.customer.fullName);
    formData.append('phone', this.customer.phone);
    formData.append('address', this.customer.address);
    if (this.customer.password) formData.append('password', this.customer.password);
    if (this.selectedFile) formData.append('profilePicture', this.selectedFile);

    this.customerService.updateCustomer(this.custId, formData).subscribe(
      (res) => {
        this.editMode = false;
        alert('Profile updated successfully!');
      },
      (err) => {
        console.error('Failed to update profile:', err);
      }
    );
  }



  logout(): void {
  this.authService.logout(); // Calls the service method
}

}
