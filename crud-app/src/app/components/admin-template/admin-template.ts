import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-admin-template',
  imports: [RouterOutlet, RouterLink, RouterLinkWithHref],
  templateUrl: './admin-template.html',
  styleUrl: './admin-template.css',
})
export class AdminTemplate {
  authService = inject(AuthService);
  router = inject(Router);

  handleLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigateByUrl("/login")
      },
      error: (err) => {

      }
    })
  }
}
