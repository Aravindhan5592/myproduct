import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
  <section style="padding:100px 20px; text-align:center; background: linear-gradient(rgba(245, 242, 235, 0.9), rgba(245, 242, 235, 0.9)), url('assets/meal-box.png'); background-size: cover; background-position: center;">
    <h1 style="font-size:48px; color: #0b1c2d;">Elevating Corporate Gatherings</h1>
    <p style="font-size:20px; color: #444; max-width: 600px; margin: 20px auto;">Premium executive meal boxes & luxury corporate hampers curated for the finest professional experiences in Madurai.</p>
    <a href="#services" style="display: inline-block; background: gold; color: #0b1c2d; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 5px; margin-top: 20px;">Explore Our Services</a>
  </section>

  <section id="services" style="padding:80px 20px; display:flex; justify-content:center; gap:40px; flex-wrap: wrap; background: white;">
    <div style="width: 400px; text-align: center; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <img src="assets/meal-box.png" alt="Corporate Meal Boxes" style="width: 100%; hieght: 250px; object-fit: cover;">
      <div style="padding: 20px;">
        <h3 style="color: #0b1c2d;">Corporate Meal Boxes</h3>
        <p style="color: #666;">Executive Lite | Wellness Pro | Signature Elite</p>
        <a routerLink="/contact" style="color: gold; font-weight: bold; text-decoration: none;">Order Now →</a>
      </div>
    </div>
    
    <div style="width: 400px; text-align: center; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <img src="assets/hamper.png" alt="Luxury Gift Hampers" style="width: 100%; height: 250px; object-fit: cover;">
      <div style="padding: 20px;">
        <h3 style="color: #0b1c2d;">Luxury Gift Hampers</h3>
        <p style="color: #666;">Festive | Executive | Custom Branding</p>
        <a routerLink="/contact" style="color: gold; font-weight: bold; text-decoration: none;">Request Quote →</a>
      </div>
    </div>
  </section>
  `
})
export class HomeComponent { }
