import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent {
  packageData = {
    Id: '',
    senderId: '',
    receiverId: '',
    packageCount: '',
    packageWeight: '',
    description: '',
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
