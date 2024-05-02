import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './modules/user/user.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'shipment-crm';
  
  constructor(private userService: UserService) {}
  
  public ngOnInit(): void {
      this.userService.loadUser();
  }
}
