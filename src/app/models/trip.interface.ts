export interface ITrip {
  id: number;
  date: Date;
  driver_id: number;
  vehicle_id: number;
  asset_ids: number[];
  status: 'Waiting' | 'InProgress' | 'Completed' | 'Cancelled';
}
