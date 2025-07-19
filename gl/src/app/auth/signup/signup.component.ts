import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core-services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const formData = this.registerForm.value;
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    this.authService.registerCustomer(formData).subscribe({
      next: (res) => {
        console.log('Registered:', res);
        alert(res.message);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert(err.error.message || 'Registration failed');
      }
    });
  }
}