import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FleetTripsComponent } from './fleet-trips/fleet-trips.component';
import { FleetVehiclesComponent } from './fleet-vehicles/fleet-vehicles.component';
import { FleetDriversComponent } from './fleet-drivers/fleet-drivers.component';
import { FleetAssetsComponent } from './fleet-assets/fleet-assets.component';

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [
    HeaderComponent,
    MatTabsModule,
    FleetTripsComponent,
    FleetVehiclesComponent,
    FleetDriversComponent,
    FleetAssetsComponent,
  ],
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss', '../../../../styles/mat/tabs.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FleetComponent {}
