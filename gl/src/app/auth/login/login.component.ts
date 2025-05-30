import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  forgotPasswordMode = false;
  step = 1;

  constructor(private fb: FormBuilder, private router: Router) {
    // Separate forms for login and forgot password (optional)
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required],
      phone: [''],
      otp: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
  }

  onLogin() {
    const { identifier, password } = this.loginForm.value;
    console.log('Logging in with:', identifier, password);
  }

  sendOtp() {
    const phone = this.loginForm.get('phone')?.value;
    if (!phone) {
      alert('Please enter your phone number');
      return;
    }
    console.log('Sending OTP to', phone);
    this.step = 2;
  }

  verifyOtp() {
    const otp = this.loginForm.get('otp')?.value;
    console.log('Verifying OTP:', otp);
    this.step = 3;
  }

  resetPassword() {
    const newPwd = this.loginForm.get('newPassword')?.value;
    const confirmPwd = this.loginForm.get('confirmPassword')?.value;
    if (newPwd !== confirmPwd) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password reset successful');
    this.forgotPasswordMode = false;
    this.step = 1;
    alert('Password updated! Please log in.');
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}