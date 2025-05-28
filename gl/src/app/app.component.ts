import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'gl';
constructor(public router: Router) {}

  shouldShowHeader(): boolean {
    const url = this.router.url;
    // Hide header ONLY on 404 page
    return url !== '/404';
  }

  shouldShowFooter(): boolean {
    const url = this.router.url;
    // Hide footer ONLY on 404 page
    return url !== '/404';
  }
}
