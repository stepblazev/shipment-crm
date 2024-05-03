import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { DriversList } from 'src/app/models/driver.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {
   public drivers = DriversList;
}
