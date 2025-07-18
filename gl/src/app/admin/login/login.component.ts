import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../core-services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
 
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private adminAuth: AdminService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { identifier, password } = this.loginForm.value;

    this.adminAuth.login(identifier, password).subscribe({
      next: () => this.router.navigate(['/admin/dashboard']),
      error: err => this.errorMessage = err.error.message || 'Login failed'
    });
  }

}