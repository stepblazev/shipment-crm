import { Component } from '@angular/core';
import { AuthService } from '../../../../modules/auth/auth.service';
import { EAuthType } from '../../../../modules/auth/models';
import { UserService } from 'src/app/modules/user/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss',
  imports: [FormsModule],
})
export class AuthLoginComponent {
  public email: string = '';
  public password: string = '';

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  public login(event: Event) {
    event.preventDefault();

    if (!this.email) {
      alert('Некорректные данные');
      return;
    }

    this.userService.authorize({
      id: Date.now(),
      email: this.email,
      avatar:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/697aa0102278601.5f32dffd09fdb.png',
      first_name: 'John',
      last_name: 'Doe',
    });
    
    this.router.navigate(['home']);
  }

  public moveToRegister() {
    this.authService.AuthType = EAuthType.REGISTER;
  }
}
