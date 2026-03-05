import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
    standalone: true,
    imports: [FormsModule, HttpClientModule],
    template: `
  <div style="padding:60px;text-align:center;">
    <h2>Request Corporate Quote</h2>
    <form (ngSubmit)="submit()" style="max-width:500px;margin:auto;display:flex;flex-direction:column;gap:10px;">
      <input [(ngModel)]="companyName" name="companyName" placeholder="Company Name" required>
      <input [(ngModel)]="email" name="email" placeholder="Email" required>
      <input [(ngModel)]="phone" name="phone" placeholder="Phone" required>
      <button type="submit" style="background:gold;padding:10px;border:none;">Submit</button>
    </form>
  </div>
  `
})
export class ContactComponent {

    companyName = '';
    email = '';
    phone = '';

    constructor(private http: HttpClient) { }

    submit() {
        this.http.post('http://localhost:8080/api/orders', {
            companyName: this.companyName,
            email: this.email,
            phone: this.phone
        }).subscribe(() => alert('Request Submitted'));
    }
}
