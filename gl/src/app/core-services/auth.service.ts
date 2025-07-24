import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

interface AuthResponse {
  token: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/customers';
  private tokenKey = 'customerToken';

  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  // Customer Registration
  // registerCustomer(data: {
  //   name: string;
  //   email: string;
  //   phone: string;
  //   password: string;
  //   confirmPassword?: string;
  // }): Observable<AuthResponse> {
  //   return this.http.post<AuthResponse>(`${this.baseUrl}/register`, data).pipe(
  //     tap((response: AuthResponse) => {
  //       localStorage.setItem(this.tokenKey, response.token);
  //       this.authStatus.next(true);
  //     })
  //   );
  // }
   registerCustomer(data: {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword?: string;
  }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, data).pipe(
      tap((response: AuthResponse) => {
        localStorage.setItem(this.tokenKey, response.token);

        const decoded = this.parseJwt(response.token);
        if (decoded && decoded.id) {
          localStorage.setItem('customerId', decoded.id);
        }

        this.authStatus.next(true);
      })
    );
  }

  // Customer Login
  // loginCustomer(credentials: {
  //   email: string;
  //   password: string;
  // }): Observable<AuthResponse> {
  //   return this.http.post<AuthResponse>(`${this.baseUrl}/login`, credentials).pipe(
  //     tap((response: AuthResponse) => {
  //       localStorage.setItem(this.tokenKey, response.token);
  //       localStorage.setItem('customerToken', response.token);
  //       this.authStatus.next(true);
  //     })
  //   );
  // }
  loginCustomer(credentials: { email: string; password: string }): Observable<AuthResponse> {
  return this.http.post<AuthResponse>(`${this.baseUrl}/login`, credentials).pipe(
    tap((response: AuthResponse) => {
      localStorage.setItem(this.tokenKey, response.token);

      const decoded = this.parseJwt(response.token);
      if (decoded && decoded.id) {
        localStorage.setItem('customerId', decoded.id); // ✅ Save customerId
      }

      this.authStatus.next(true);
    })
  );
}


  // Logout Customer
  logout(): void {
  // Remove the stored token
  localStorage.removeItem(this.tokenKey); // e.g., 'customerToken' or 'authToken'

  // Optional: Remove other customer-related data
  localStorage.removeItem('customerId');
  localStorage.removeItem('customerName');

  // Notify other parts of app that user is logged out
  this.authStatus.next(false);

  // Redirect to login page
  this.router.navigate(['/auth/login']);
}


  // Observable login state
  isLoggedIn() {
    return this.authStatus.asObservable();
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check token in localStorage
  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

   // 🔐 Decode JWT token payload
  private parseJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Error decoding JWT:', e);
      return null;
    }
  }
}
