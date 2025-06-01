import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:3000/api/auth';  // Adjust backend URL as needed

  constructor(private http: HttpClient) {}

  adminLogin(identifier: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/admin-login`, { identifier, password });
  }
}