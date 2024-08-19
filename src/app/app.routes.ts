import { Routes } from '@angular/router';
import { ShippingComponent } from './shipping/shipping.component'; // ShippingComponent'in yolu
import { MemberComponent } from './member/member.component';

export const routes: Routes = [
  // Diğer rotalar
  { path: '', component: MemberComponent },
  { path: 'shipping', component: ShippingComponent },
];
