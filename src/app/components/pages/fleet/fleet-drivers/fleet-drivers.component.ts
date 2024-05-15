import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DriverService } from 'src/app/models/drivers/driver.service';

@Component({
  selector: 'app-fleet-drivers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fleet-drivers.component.html',
  styleUrl: './fleet-drivers.component.scss'
})
export class FleetDriversComponent {
    constructor(public readonly driverService: DriverService) {}

    ngOnInit(): void {
      this.driverService.getList();
    }
}
