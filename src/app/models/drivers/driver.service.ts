import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from 'src/constants';
import { IDriver } from '../driver.interface';
import { InitialDriversList } from './initial-data';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  public drivers: IDriver[] = [];
  public isLoading: boolean = false;

  constructor(private readonly localStorageService: LocalStorageService) {}

  public getList(): void {
    this.isLoading = true;

    if (this.localStorageService.exists(LOCAL_STORAGE_KEYS.DRIVERS)) {
        this.drivers = this.localStorageService.getItem<IDriver[]>(LOCAL_STORAGE_KEYS.DRIVERS) ?? [];
    } else {
        this.drivers = InitialDriversList.reverse();
    }
    
    this.isLoading = false;
  }

  public create(driverData: Omit<IDriver, 'id'>): void {
    this.isLoading = true;

    const newDriver = { id: Date.now(), ...driverData };
    this.drivers = [newDriver, ...this.drivers];
    this.localStorageService.setItem(LOCAL_STORAGE_KEYS.DRIVERS, this.drivers);
    
    this.isLoading = false;
  }

  public update(newDriver: IDriver): void {
    this.isLoading = true;

    this.drivers = this.drivers.map((driver) => {
        return driver.id == newDriver.id ? newDriver : driver;
    });
    this.localStorageService.setItem(LOCAL_STORAGE_KEYS.DRIVERS, this.drivers);
    
    this.isLoading = false;
  }
  
  public deleteByIds(ids: number[]): void {
    this.isLoading = true;

    this.drivers = this.drivers.filter((driver) => !ids.includes(driver.id));
    this.localStorageService.setItem(LOCAL_STORAGE_KEYS.DRIVERS, this.drivers);
    
    this.isLoading = false;
  }
  
  public static getFullName(driver: IDriver): string {
    return `${driver.first_name} ${driver.last_name} (${driver.birth_date.toLocaleDateString('ru-RU')}) | ${driver.email}`;
  }
}
