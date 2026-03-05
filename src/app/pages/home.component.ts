import { Component } from '@angular/core';

@Component({
    standalone: true,
    template: `
  <section style="padding:80px;text-align:center;background:#f5f2eb;">
    <h1 style="font-size:42px;">Elevating Corporate Gatherings</h1>
    <p>Premium executive meal boxes & luxury corporate hampers in Madurai.</p>
  </section>

  <section style="padding:50px;display:flex;justify-content:space-around;">
    <div>
      <h3>Corporate Meal Boxes</h3>
      <p>Executive Lite | Wellness Pro | Signature Elite</p>
    </div>
    <div>
      <h3>Luxury Gift Hampers</h3>
      <p>Festive | Executive | Custom Branding</p>
    </div>
  </section>
  `
})
export class HomeComponent { }
