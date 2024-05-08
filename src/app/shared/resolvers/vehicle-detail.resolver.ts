import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { IVehicle, VehiclesList } from 'src/app/models/vehicle.interface';

export const VehicleDetailResolver: ResolveFn<IVehicle | null> = (route: ActivatedRouteSnapshot) => {
  const vehicleId = route.paramMap.get('id');
  return (
    VehiclesList.find((vehicle) => vehicleId == vehicle.id.toString()) ?? null
  );
};
