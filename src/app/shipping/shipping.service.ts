import { Injectable } from '@angular/core';
import axios from 'axios';
import { ShippingDto } from './dto/shipping.dto';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  private apiUrl = 'http://localhost:5148';

  constructor() {}

  async addPackage(packageData: any) {
    try {
      const dto: ShippingDto = {
        senderId: packageData.senderId,
        receiverId: packageData.receiverId,
        packageCount: packageData.packageCount,
        packageWeight: packageData.packageWeight,
        description: packageData.description,
      };
      const res = await axios
        .post(`${this.apiUrl}/api/shipping`, dto)
        .then((res) => {
          res.data;
        });

      return res;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  async getPackages() {
    try {
      const res = await axios.get(`${this.apiUrl}/api/shipping`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getMemberIds() {
    try {
      const response = await axios.get(`${this.apiUrl}/getId`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
