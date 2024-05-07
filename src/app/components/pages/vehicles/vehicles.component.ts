import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  imports: [HeaderComponent, CommonModule, RouterOutlet],
})
export class VehiclesComponent {}
