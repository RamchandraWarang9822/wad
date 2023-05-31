import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Registration Form';
  displayName: string = '';
  displayAddress: string = '';
  displayEmail: string = '';
  displayContact: string = '';

  getValue(name: string, address: string, email: string, contact: string) {
    this.displayName = name;
    this.displayAddress = address;
    this.displayEmail = email;
    this.displayContact = contact;
  }
}