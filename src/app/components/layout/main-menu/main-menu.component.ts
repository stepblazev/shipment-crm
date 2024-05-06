import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink } from '@angular/router';
import { mainMenuLinks } from 'src/app/modules/main-menu/links';
import { IMainMenuLink } from 'src/app/modules/main-menu/models';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from 'src/constants';

@Component({
  standalone: true,
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
  imports: [CommonModule, RouterLink],
})
export class MainMenuComponent {
  public isWide: boolean = true;
  public links: IMainMenuLink[][] = mainMenuLinks;

  constructor(
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) {
    this.isWide =
      Boolean(
        this.localStorageService.getItem<number>(LOCAL_STORAGE_KEYS.MENU)
      ) ?? true;
  }

  public setIsWide(state: boolean): void {
    this.isWide = state;
    this.localStorageService.setItem(LOCAL_STORAGE_KEYS.MENU, Number(state));
  }

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
