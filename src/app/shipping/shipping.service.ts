import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShippingDto } from './dto/shipping.dto'; // Arayüz dosyanızın yoluna göre bu kısmı güncelleyin

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  private apiUrl = 'https://api.example.com/packages'; // API URL'inizi buraya ekleyin

  constructor(private http: HttpClient) {}

  addPackage(packageData: ShippingDto): Observable<ShippingDto> {
    return this.http.post<ShippingDto>(this.apiUrl, packageData);
  }

  getPackages(): Observable<ShippingDto[]> {
    return this.http.get<ShippingDto[]>(this.apiUrl);
  }
}
