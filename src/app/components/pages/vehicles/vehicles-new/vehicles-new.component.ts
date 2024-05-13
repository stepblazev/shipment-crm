import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IOption,
  SelectComponent,
} from 'src/app/components/ui/select/select.component';
import {
  TVehicleStatus,
  TVehicleType,
} from 'src/app/models/vehicles/models/vehicle.interface';
import { statusOptions, typeOptions } from 'src/app/models/vehicles/options';
import { VehicleService } from 'src/app/models/vehicles/vehicle.service';

@Component({
  selector: 'app-vehicles-new',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, SelectComponent],
  templateUrl: './vehicles-new.component.html',
  styleUrl: './vehicles-new.component.scss',
})
export class VehiclesNewComponent {
  public make: string;
  public model: string;
  public year: number;
  public registration_number: string;
  public registration_country: string;
  public registration_state: string;
  public load_capacity?: string;

  public statusOptions: IOption<TVehicleStatus>[] = statusOptions;
  public currentStatusOption: IOption<TVehicleStatus>;

  public typeOptions: IOption<TVehicleType>[] = typeOptions;
  public currentTypeOption: IOption<TVehicleType>;

  constructor(private readonly vehicleService: VehicleService, private readonly router: Router) {}

  public create(): void {
    this.vehicleService.create({
      status: this.currentStatusOption.value,
      type: this.currentTypeOption.value,
      make: this.make,
      model: this.model,
      year: this.year,
      registration_number: this.registration_number,
      registration_country: this.registration_country,
      registration_state: this.registration_state,
      load_capacity: this.load_capacity,
    });
    
    this.router.navigate(['vehicles']);
  }
}
