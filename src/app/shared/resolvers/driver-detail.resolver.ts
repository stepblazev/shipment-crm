import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { DriverService } from 'src/app/models/drivers/driver.service';
import { IDriver } from 'src/app/models/drivers/models/driver.interface';

export const DriverDetailResolver: ResolveFn<IDriver | null> = (route: ActivatedRouteSnapshot) => {
  const driverService = inject(DriverService);
  driverService.getList();
  
  const driverId = route.paramMap.get('id');
  return (driverService.drivers.find((driver) => driverId == driver.id.toString()) ?? null);
};
