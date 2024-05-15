import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VehicleService } from 'src/app/models/vehicles/vehicle.service';

@Component({
  selector: 'app-fleet-vehicles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fleet-vehicles.component.html',
  styleUrl: './fleet-vehicles.component.scss',
})
export class FleetVehiclesComponent implements OnInit {
  constructor(public readonly vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getList();
  }
}
