export interface ShippingDto {
  id: string;
  senderId: string;
  receiverId: string;
  packageCount: number;
  packageWeight: number;
  description: string;
}
