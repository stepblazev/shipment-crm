import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { IVehicle, TVehicleStatus, TVehicleType } from 'src/app/models/vehicles/models/vehicle.interface';
import { VehicleService } from 'src/app/models/vehicles/vehicle.service';
import { VehiclesFilterComponent } from '../vehicles-filter/vehicles-filter.component';
import { VehicleTypeAliases } from 'src/app/models/vehicles/aliases/type';
import { VehicleStatusAliases } from 'src/app/models/vehicles/aliases/status';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    RouterLink,
    VehiclesFilterComponent,
  ],
  templateUrl: './vehicles-list.component.html',
  styleUrls: [
    './vehicles-list.component.scss',
    '../../../../../styles/mat/table.scss',
  ],
})
export class VehiclesListComponent implements AfterViewInit, OnInit {
  public displayedColumns: string[] = [
    'select',
    'status',
    'type',
    'make',
    'model',
    'year',
    'load_capacity',
    'registration_number',
    'registration_country',
    'registration_state',
  ];

  public dataSource: MatTableDataSource<IVehicle>;
  public selectedRows: number[] = [];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public readonly router: Router,
    public readonly vehicleService: VehicleService,
    private readonly confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    this.vehicleService.getList();
    this.dataSource = new MatTableDataSource<IVehicle>(this.vehicleService.vehicles);
  }

  ngAfterViewInit(): void {
    if (this.sort) this.dataSource.sort = this.sort;
  }

  public toggleSelect(selectedId: number): void {
    if (!this.selectedRows.includes(selectedId)) {
      this.selectedRows = [...this.selectedRows, selectedId];
    } else {
      this.selectedRows = this.selectedRows.filter((id) => id != selectedId);
    }
  }

  public setAll(state: boolean): void {
    if (state) {
      this.selectedRows = this.dataSource.data.map((row) => row.id);
    } else {
      this.selectedRows = [];
    }
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
          this.dataSource = new MatTableDataSource(this.vehicleService.vehicles);
          this.selectedRows = this.selectedRows.filter((id) => !ids.includes(id));
        }
      });
  }
  
  public getStatusAlias(status: string): string {
    return VehicleStatusAliases[status as TVehicleStatus];
  }
  
  public getTypeAlias(type: string): string {
    return VehicleTypeAliases[type as TVehicleType];
  }
}
