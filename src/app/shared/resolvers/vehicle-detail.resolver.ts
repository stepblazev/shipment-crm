import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { IVehicle } from 'src/app/models/vehicles/models/vehicle.interface';
import { VehicleService } from 'src/app/models/vehicles/vehicle.service';

export const VehicleDetailResolver: ResolveFn<IVehicle | null> = (route: ActivatedRouteSnapshot) => {
  const vehicleService = inject(VehicleService);
  vehicleService.getList();
  
  const vehicleId = route.paramMap.get('id');
  return (vehicleService.vehicles.find(
      (vehicle) => vehicleId == vehicle.id.toString()
    ) ?? null
  );
};
