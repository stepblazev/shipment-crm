import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IOption, SelectComponent } from 'src/app/components/ui/select/select.component';
import { IVehicle, TVehicleStatus, TVehicleType } from 'src/app/models/vehicles/models/vehicle.interface';
import { statusOptions, typeOptions } from 'src/app/models/vehicles/options';
import { VehicleService } from 'src/app/models/vehicles/vehicle.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  standalone: true,
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrl: './vehicles-detail.component.scss',
  imports: [CommonModule, RouterLink, SelectComponent, FormsModule],
})
export class VehiclesDetailComponent implements OnInit {
  public vehicle: IVehicle | null;
  public isEdit: boolean = false;

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

  constructor(
    private readonly title: Title,
    private readonly router: Router,
    private readonly confirmService: ConfirmService,
    private readonly vehicleService: VehicleService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vehicle = this.activatedRoute.snapshot.data['vehicle'];
    if (this.vehicle) {
      this.title.setTitle(this.getFullName());
      this.reset();
    }
  }

  public getFullName(): string {
    if (!this.vehicle) return '';
    return VehicleService.getFullName(this.vehicle);
  }

  public update(): void {
    if (!this.vehicle) return;
    this.vehicleService.update({
      id: this.vehicle.id,
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
    this.isEdit = false;
  }

  public reset(): void {
    if (!this.vehicle) return;
    this.currentStatusOption =
      statusOptions.find((status) => status.value == this.vehicle?.status) ??
      statusOptions[0];

    this.currentTypeOption =
      typeOptions.find((type) => type.value == this.vehicle?.type) ??
      typeOptions[0];

    this.make = this.vehicle.make;
    this.model = this.vehicle.model;
    this.year = this.vehicle.year;
    this.registration_number = this.vehicle.registration_number;
    this.registration_country = this.vehicle.registration_country;
    this.registration_state = this.vehicle.registration_state;
    this.load_capacity = this.vehicle.load_capacity;

    this.isEdit = false;
  }

  public delete(): void {
    if (!this.vehicle) return;
    this.confirmService
      .confirm({
        title: 'Удалить транспорт?',
        message: `${this.getFullName()} будет удален`,
      })
      .subscribe((answer) => {
        if (answer && this.vehicle) {
          this.vehicleService.deleteByIds([this.vehicle.id]);
          this.router.navigate(['vehicles']);
        }
      });
  }
}
