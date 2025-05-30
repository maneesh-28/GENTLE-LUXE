import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
registerForm: FormGroup;
  step = 1;
  otpSent = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      otp: [''],
      name: ['', Validators.required],
      email: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  sendOtp() {
    const mobile = this.registerForm.get('mobile')?.value;
    if (!mobile) {
      alert('Please enter your mobile number');
      return;
    }

    // TODO: Send OTP using API
    console.log('Sending OTP to', mobile);
    this.otpSent = true;
  }

  verifyOtp() {
    const otp = this.registerForm.get('otp')?.value;
    if (!otp) {
      alert('Please enter the OTP');
      return;
    }

    // TODO: Verify OTP with API
    console.log('OTP verified:', otp);
    this.step = 2;
  }

  nextStep() {
    if (this.step < 4) {
      this.step++;
    }
  }

  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  submitSignup() {
    const pwd = this.registerForm.get('password')?.value;
    const confirmPwd = this.registerForm.get('confirmPassword')?.value;

    if (pwd !== confirmPwd) {
      alert('Passwords do not match');
      return;
    }

    // TODO: Submit form data to backend
    console.log('Registering user:', this.registerForm.value);
  }
}