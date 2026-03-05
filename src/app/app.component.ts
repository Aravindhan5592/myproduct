import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
  <div style="font-family: Georgia, serif;">
    <header style="background:#0b1c2d;color:white;padding:20px;display:flex;justify-content:space-between;">
      <h2><span style="color:gold;">AR</span> Signature Hospitality</h2>
      <a routerLink="/contact" style="color:gold;text-decoration:none;">Request Quote</a>
    </header>

    <router-outlet></router-outlet>

    <footer style="background:black;color:#aaa;padding:20px;text-align:center;">
      © 2026 AR Signature Hospitality
    </footer>
  </div>
  `
})
export class AppComponent { }
