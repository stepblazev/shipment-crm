import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule],
})
export class HomeComponent {
  constructor(
    public readonly userService: UserService,
    public readonly confirmService: ConfirmService
  ) {}

  public homeLogout(): void {
    this.confirmService
      .confirm({
        title: 'Подтверждение действия',
        message: 'Вы действительно хотите выйти из учетной записи?',
      })
      .subscribe((answer: boolean) => {
        if (answer) this.userService.logout();
      });
  }
}
