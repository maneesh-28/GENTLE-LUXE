import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private baseUrl = 'http://localhost:5000/api/admin';

    private tokenKey = 'adminToken';
    private authStatus = new BehaviorSubject<boolean>(this.hasToken());


  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response: { token: string; }) => {
        localStorage.setItem(this.tokenKey, response.token);
        this.authStatus.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.authStatus.next(false);
    this.router.navigate(['/admin/login']);
  }

  isLoggedIn() {
    return this.authStatus.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }


}
