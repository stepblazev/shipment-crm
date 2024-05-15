export interface IAsset {
  id: number;
  status: 'Waiting' | 'In Progress' | 'Completed' | 'Cancelled';
  delivery_date: Date;
  delivery_address: string;
  name: string;
  weight: number;
  width: number;
  height: number;
}
