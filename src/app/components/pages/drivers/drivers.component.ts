import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './drivers.component.html',
})
export class DriversComponent {}
