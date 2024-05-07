import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './assets.component.html',
})
export class AssetsComponent {

}
