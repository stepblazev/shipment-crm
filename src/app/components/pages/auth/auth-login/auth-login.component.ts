import { Component } from '@angular/core';
import { AuthService } from '../../../../modules/auth/auth.service';
import { EAuthType } from '../../../../modules/auth/models';

@Component({
  standalone: true,
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss',
  imports: [],
})
export class AuthLoginComponent {
    constructor(private readonly authService: AuthService) {}
    
    public moveToRegister() {
        this.authService.AuthType = EAuthType.REGISTER;
    }
}
