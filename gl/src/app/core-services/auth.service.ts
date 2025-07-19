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
        this.authStatus.next(true);
      })
    );
  }

  // Customer Login
  loginCustomer(credentials: {
    email: string;
    password: string;
  }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: AuthResponse) => {
        localStorage.setItem(this.tokenKey, response.token);
        this.authStatus.next(true);
      })
    );
  }

  // Logout Customer
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.authStatus.next(false);
    this.router.navigate(['/customer/login']); // change route as needed
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
}
