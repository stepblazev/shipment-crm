import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IVehicle } from 'src/app/models/vehicle.interface';

@Component({
  standalone: true,
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrl: './vehicles-detail.component.scss',
  imports: [CommonModule, RouterLink],
})
export class VehiclesDetailComponent implements OnInit {
  public vehicle: IVehicle | null;

  constructor(
    private readonly title: Title,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vehicle = this.activatedRoute.snapshot.data['vehicle'];
    if (this.vehicle) {
      const vehicleTitle = this.getFullName(this.vehicle);
      this.title.setTitle(vehicleTitle);
    }
  }

  // FIXME вынести
  public getFullName(vehicle: IVehicle): string {
    return `${vehicle.make} ${vehicle.model} (${vehicle.year}) | ${vehicle.registration.number}`;
  }
}
