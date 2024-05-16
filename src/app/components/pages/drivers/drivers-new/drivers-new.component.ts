import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router, RouterLink } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { DriverService } from 'src/app/models/drivers/driver.service';

@Component({
  selector: 'app-drivers-new',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './drivers-new.component.html',
  styleUrl: './drivers-new.component.scss',
})
export class DriversNewComponent {
  public login: string = '';
  public first_name: string = '';
  public last_name: string = '';
  public birth_date: Date;
  public phone: string = '';
  public email: string = '';
  public license_type: string = '';
  public license_number: string = '';
  public license_expire_date: Date;

  constructor(
    private readonly router: Router,
    private readonly driverService: DriverService
  ) {}

  public create(): void {
    this.driverService.getList();
    this.driverService.create({
      login: this.login,
      first_name: this.first_name,
      last_name: this.last_name,
      birth_date: this.birth_date,
      phone: this.phone,
      email: this.email,
      license_type: this.license_type,
      license_number: this.license_number,
      license_expire_date: this.license_expire_date,
    });

    this.router.navigate(['drivers']);
  }
}
