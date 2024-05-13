import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IOption, SelectComponent } from 'src/app/components/ui/select/select.component';
import { TVehicleType } from 'src/app/models/vehicles/models/vehicle.interface';

@Component({
  selector: 'app-vehicles-filter',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './vehicles-filter.component.html',
  styleUrl: './vehicles-filter.component.scss'
})
export class VehiclesFilterComponent {
    public currentTypeOption: IOption<TVehicleType>;
    public typeOptions: IOption<TVehicleType>[] = [
      { caption: 'Грузовик', value: 'Truck' },
      { caption: 'Фургон', value: 'Van' },
      { caption: 'Легк. автомобиль', value: 'Car' },
      { caption: 'Другое', value: 'Other' },
    ];
}
