import { Injectable } from '@angular/core';
import axios from 'axios';
import { MemberDto } from './dto/member.dto';
@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private apiUrl = 'http://localhost:5148';

  constructor() {}

  // Örnek bir GET isteği
  async getData() {
    try {
      const response = await axios.get(`${this.apiUrl}/api/member`);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  // Örnek bir POST isteği
  async postData(data: any) {
    try {
      const dto: MemberDto = {
        id: data.id,
        name: data.name,
        lastname: data.lastname,
        address: data.address,
        addressType: +data.addressType,
      };

      const response = await axios.post(`${this.apiUrl}/api/member`, dto);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }
}
