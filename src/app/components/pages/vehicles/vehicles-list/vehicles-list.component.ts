import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { IVehicle } from 'src/app/models/vehicles/models/vehicle.interface';
import { VehicleService } from 'src/app/models/vehicles/vehicle.service';
import { VehiclesFilterComponent } from '../vehicles-filter/vehicles-filter.component';
import { DataTableComponent, IDataTableColumn } from 'src/app/components/ui/data-table/data-table.component';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [
    CommonModule,
    DataTableComponent,
    RouterLink,
    VehiclesFilterComponent,
  ],
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
})
export class VehiclesListComponent implements OnInit {
  public columns: IDataTableColumn[] = [
    {
      key: 'status',
      alias: 'Статус',
      sort: true,
    },
    {
      key: 'type',
      alias: 'Тип',
      sort: true,
    },
    {
      key: 'make',
      alias: 'Марка',
      sort: true,
    },
    {
      key: 'model',
      alias: 'Модель',
      sort: true,
    },
    {
      key: 'year',
      alias: 'Год выпуска',
      sort: true,
    },
    {
      key: 'load_capacity',
      alias: 'Макс. нагрузка',
      sort: true,
    },
    {
      key: 'registration_number',
      alias: 'Номер регистрации',
      sort: true,
    },
    {
      key: 'registration_country',
      alias: 'Страна регистрации',
      sort: true,
    },
    {
      key: 'registration_state',
      alias: 'Регион регистрации',
      sort: true,
    },
  ];

  public selectedRows: number[] = [];
  public vehicles: IVehicle[] = [];

  constructor(
    private readonly router: Router,
    private readonly vehicleService: VehicleService,
    private readonly confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    this.vehicleService.getList();
    this.vehicles = this.vehicleService.vehicles;
  }

  public toDetail(vehicle: any): void {
    this.router.navigate(['vehicles', (vehicle as IVehicle).id])
  }
  
  public deleteByIds(ids: number[]): void {
    this.confirmService
      .confirm({
        title: 'Удалить выбранные элементы?',
        message: `Будет удалено элементов: ${ids.length}`,
      })
      .subscribe((answer: boolean) => {
        if (answer) {
          this.vehicleService.deleteByIds(ids);
          this.vehicles = this.vehicleService.vehicles;
          this.selectedRows = this.selectedRows.filter(
            (id) => !ids.includes(id)
          );
        }
      });
  }
}
