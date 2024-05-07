import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripsList } from 'src/app/models/trips.interface';

@Component({
  selector: 'app-fleet-trips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fleet-trips.component.html',
  styleUrl: './fleet-trips.component.scss'
})
export class FleetTripsComponent {
    public trips = TripsList;
}
