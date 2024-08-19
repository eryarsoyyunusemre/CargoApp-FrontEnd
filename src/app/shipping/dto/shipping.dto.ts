export interface ShippingDto {
  Id: string;
  senderId: string;
  receiverId: string;
  packageCount: number;
  packageWeight: number;
  description: string;
}
