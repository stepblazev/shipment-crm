import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripsList } from 'src/app/models/trips.interface';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  IOption,
  SelectComponent,
} from 'src/app/components/ui/select/select.component';

@Component({
  selector: 'app-fleet-trips',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, SelectComponent],
  templateUrl: './fleet-trips.component.html',
  styleUrl: './fleet-trips.component.scss',
})
export class FleetTripsComponent {
  public trips = TripsList;

  public currentOption: IOption<string>;
  public statusOptions: IOption<string>[] = [
    { caption: 'В процессе', value: '1' },
    { caption: 'Ожидает', value: '2' },
    { caption: 'Выполнено', value: '3' },
    { caption: 'Отменено', value: '4' },
  ];
}
