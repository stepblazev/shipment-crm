import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IOption, SelectComponent } from 'src/app/components/ui/select/select.component';
import { IVehicle } from 'src/app/models/vehicles/models/vehicle.interface';
import { statusOptions } from 'src/app/models/vehicles/options';
import { VehicleService } from 'src/app/models/vehicles/vehicles.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  standalone: true,
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrl: './vehicles-detail.component.scss',
  imports: [CommonModule, RouterLink, SelectComponent],
})
export class VehiclesDetailComponent implements OnInit {
  public vehicle: IVehicle | null;
  public isEdit: boolean = false;

  public statusOptions: IOption<string>[] = statusOptions;
  public currentStatusOption: IOption<string>;

  constructor(
    private readonly title: Title,
    private readonly router: Router,
    private readonly confirmService: ConfirmService,
    private readonly vehicleService: VehicleService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vehicle = this.activatedRoute.snapshot.data['vehicle'];
    if (this.vehicle) {
      this.title.setTitle(this.getFullName());
      this.currentStatusOption =
        statusOptions.find((status) => status.value == this.vehicle?.status) ??
        statusOptions[0];
    }
  }

  public getFullName(): string {
    if (!this.vehicle) return '';
    return VehicleService.getFullName(this.vehicle);
  }

  public update(): void {
    if (!this.vehicle) return;
    this.vehicleService.update(this.vehicle);
    this.isEdit = false;
  }

  public delete(): void {
    if (!this.vehicle) return;
    this.confirmService
      .confirm({
        title: 'Удалить транспорт?',
        message: `${this.getFullName()} будет удален`,
      })
      .subscribe((answer) => {
        if (answer && this.vehicle) {
          this.vehicleService.deleteByIds([this.vehicle.id]);
          this.router.navigate(['vehicles']);
        }
      });
  }
}
