import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink } from '@angular/router';
import { mainMenuLinks } from 'src/app/modules/main-menu/links';
import { IMainMenuLink } from 'src/app/modules/main-menu/models';

@Component({
  standalone: true,
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
  imports: [CommonModule, RouterLink],
})
export class MainMenuComponent {
  public links: IMainMenuLink[][] = mainMenuLinks;

  constructor(private router: Router) {}
  
  public isActiveRoute(path: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };

    return this.router.isActive(path, options);
  }
}
