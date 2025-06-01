import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  standalone: false,
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent implements OnInit {
  adminLoginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(): void {
    if (this.adminLoginForm.valid) {
      const { identifier, password } = this.adminLoginForm.value;
      // TODO: Call backend API
      console.log('Login Attempt:', identifier, password);
    }
  }
}

