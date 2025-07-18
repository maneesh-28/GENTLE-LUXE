import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from '../core-services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adminAuth: AdminService, private router: Router) {}

  canActivate(): boolean {
    const token = this.adminAuth.getToken();
    if (token) return true;

    this.router.navigate(['/admin/login']);
    return false;
  }
}
