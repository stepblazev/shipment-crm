import { Component } from '@angular/core';
import { AuthService } from '../../../../modules/auth/auth.service';
import { EAuthType } from '../../../../modules/auth/models';

@Component({
  selector: 'app-auth-register',
  standalone: true,
  imports: [],
  templateUrl: './auth-register.component.html',
  styleUrl: './auth-register.component.scss'
})
export class AuthRegisterComponent {
    constructor(private readonly authService: AuthService) {}
    
    public moveToRegister() {
        this.authService.AuthType = EAuthType.LOGIN;
    }
}
