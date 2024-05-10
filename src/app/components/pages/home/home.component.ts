import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { RouterLink } from '@angular/router';
import { homeLinks } from 'src/app/modules/home-menu/links';
import { IHomeLink } from 'src/app/modules/home-menu/models';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, HeaderComponent, RouterLink],
})
export class HomeComponent {
  public homeLinks: IHomeLink[][] = homeLinks;

  constructor() {}
}
