import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DriverService } from 'src/app/models/drivers/driver.service';
import { IDriver } from 'src/app/models/drivers/models/driver.interface';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-drivers-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './drivers-detail.component.html',
  styleUrl: './drivers-detail.component.scss',
})
export class DriversDetailComponent implements OnInit {
  public driver: IDriver | null;
  public isEdit: boolean = false;

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
    
    // this.vehicleService.update({
    //   id: this.vehicle.id,
    //   status: this.currentStatusOption.value,
    //   type: this.currentTypeOption.value,
    //   make: this.make,
    //   model: this.model,
    //   year: this.year,
    //   registration_number: this.registration_number,
    //   registration_country: this.registration_country,
    //   registration_state: this.registration_state,
    //   load_capacity: this.load_capacity,
    // });
    
    this.isEdit = false;
  }
  
  public reset(): void {
    if (!this.driver) return;
    
    // this.make = this.vehicle.make;
    // this.model = this.vehicle.model;
    // this.year = this.vehicle.year;
    // this.registration_number = this.vehicle.registration_number;
    // this.registration_country = this.vehicle.registration_country;
    // this.registration_state = this.vehicle.registration_state;
    // this.load_capacity = this.vehicle.load_capacity;

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
