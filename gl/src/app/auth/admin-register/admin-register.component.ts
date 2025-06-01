import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core-services/auth.service';

@Component({
  selector: 'app-admin-register',
  standalone: false,
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent implements OnInit {
  adminLoginForm!: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.adminLoginForm = this.fb.group({
      identifier: ['', Validators.required], // can be email/username/mobile
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.adminLoginForm.invalid) return;

    const { identifier, password } = this.adminLoginForm.value;

    this.authService.adminLogin(identifier, password).subscribe({
      next: (res) => {
        // Save token in localStorage or service
        localStorage.setItem('adminToken', res.token);
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Login failed';
      }
    });
  }
}