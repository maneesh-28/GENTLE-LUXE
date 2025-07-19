export interface Product {
  quantity: any;
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  category: string;
  sizes: any; // or more specifically: string[] | object
  colors: string;
  status: boolean;
  imageUrl: string;
  adminId: number;
  createdAt?: string;
  updatedAt?: string;
}
