import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShippingService } from './shipping.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
  providers: [ShippingService],
})
export class ShippingComponent implements OnInit {
  submitted = false;
  packages: any; // Kargo verilerini saklamak için bir değişken ekleyin
  memberIds: any[] = []; // Alıcı ID'leri için bir değişken

  constructor(private shippingService: ShippingService) {}

  async ngOnInit() {
    this.packages = await this.shippingService.getPackages(); // Veriyi alın ve saklayın
    this.memberIds = await this.shippingService.getMemberIds(); // Gönderici ID'lerini alın
  }

  async onSubmit(shippingForm: NgForm) {
    this.submitted = true;

    if (shippingForm.valid) {
      await this.shippingService.addPackage(shippingForm.value);
      shippingForm.reset();
      this.packages = await this.shippingService.getPackages(); // Yeni verileri alın ve güncelleyin
    } else {
      console.log('Form geçersiz');
    }
  }
}
