import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div style="font-family: 'Georgia', serif; color: #333;">
    <header style="background:#0b1c2d; color:white; padding:15px 40px; display:flex; justify-content:space-between; align-items: center; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
      <div style="cursor: pointer;" routerLink="/">
        <h2 style="margin: 0; font-size: 24px;"><span style="color:gold;">AR</span> Signature Hospitality</h2>
      </div>
      <nav style="display: flex; gap: 30px; align-items: center;">
        <a routerLink="/" style="color:white; text-decoration:none; font-weight: 500;">Home</a>
        <a routerLink="/contact" style="color: gold; text-decoration:none; font-weight: bold; border: 1px solid gold; padding: 8px 15px; border-radius: 4px;">Get a Quote</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer style="background:#0b1c2d; color:#fff; padding:40px 20px; text-align:center; border-top: 4px solid gold;">
      <div style="margin-bottom: 20px;">
        <h3 style="color: gold; margin-bottom: 10px;">AR Signature Hospitality</h3>
        <p style="color: #ccc; font-size: 14px;">Elevating hospitality experiences in Madurai.</p>
      </div>
      <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
        <a href="#" style="color: gold; text-decoration: none;">Instagram</a>
        <a href="#" style="color: gold; text-decoration: none;">LinkedIn</a>
        <a href="#" style="color: gold; text-decoration: none;">Facebook</a>
      </div>
      <p style="color:#888; font-size: 12px; margin: 0;">
        © 2026 AR Signature Hospitality. All rights reserved.
      </p>
    </footer>
  </div>
  `
})
export class AppComponent { }
