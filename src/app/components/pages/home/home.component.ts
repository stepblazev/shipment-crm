import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule],
})
export class HomeComponent {
  constructor(public readonly userService: UserService) {}
}
