import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DriverService } from 'src/app/models/drivers/driver.service';
import { IDriver } from 'src/app/models/drivers/models/driver.interface';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-drivers-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './drivers-detail.component.html',
  styleUrl: './drivers-detail.component.scss',
})
export class DriversDetailComponent implements OnInit {
  public driver: IDriver | null;
  public isEdit: boolean = false;

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
    private readonly title: Title,
    private readonly router: Router,
    private readonly confirmService: ConfirmService,
    private readonly driverService: DriverService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.driver = this.activatedRoute.snapshot.data['driver'];
    if (this.driver) {
      this.title.setTitle(this.getFullName());
      this.reset();
    }
  }

  public getFullName(): string {
    if (!this.driver) return '';
    return DriverService.getFullName(this.driver);
  }

  public update(): void {
    if (!this.driver) return;

    this.driverService.update({
      id: this.driver.id,
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

    this.isEdit = false;
  }

  public reset(): void {
    if (!this.driver) return;

    this.login = this.driver.login;
    this.first_name = this.driver.first_name;
    this.last_name = this.driver.last_name;
    this.birth_date = this.driver.birth_date;
    this.phone = this.driver.phone;
    this.email = this.driver.email;
    this.license_type = this.driver.license_type;
    this.license_number = this.driver.license_number;
    this.license_expire_date = this.driver.license_expire_date;

    this.isEdit = false;
  }

  public delete(): void {
    if (!this.driver) return;
    this.confirmService
      .confirm({
        title: 'Удалить водителя?',
        message: `${this.getFullName()} будет удален`,
      })
      .subscribe((answer) => {
        if (answer && this.driver) {
          this.driverService.deleteByIds([this.driver.id]);
          this.router.navigate(['drivers']);
        }
      });
  }
}
