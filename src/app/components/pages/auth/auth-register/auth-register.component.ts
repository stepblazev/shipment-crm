import { Component } from '@angular/core';
import { AuthService } from '../../../../modules/auth/auth.service';
import { EAuthType } from '../../../../modules/auth/models';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/modules/user/user.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrl: './auth-register.component.scss',
  imports: [FormsModule],
})
export class AuthRegisterComponent {
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public password: string = '';
  public passwordRepeat: string = '';

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  public register(event: Event) {
    event.preventDefault();

    if (!this.email || !this.firstName || !this.lastName) {
      alert('Некорректные данные');
      return;
    }

    this.userService.authorize({
      id: Date.now(),
      email: this.email,
      avatar:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/697aa0102278601.5f32dffd09fdb.png',
      first_name: this.firstName,
      last_name: this.lastName,
    });
    
    this.router.navigate(['home']);
  }

  public moveToLogin() {
    this.authService.AuthType = EAuthType.LOGIN;
  }
}
