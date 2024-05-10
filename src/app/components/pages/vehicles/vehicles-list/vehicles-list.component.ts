import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { IOption, SelectComponent } from 'src/app/components/ui/select/select.component';
import { IVehicle } from 'src/app/models/vehicles/models/vehicle.interface';
import { VehicleService } from 'src/app/models/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    RouterLink,
    SelectComponent,
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

  public currentMakeOption: IOption<string>;
  public makeOptions: IOption<string>[] = [
    { caption: 'Ford', value: 'Ford' },
    { caption: 'Volvo', value: 'Volvo' },
    { caption: 'Toyota', value: 'Toyota' },
    { caption: 'Volkswagen', value: 'Volkswagen' },
    { caption: 'MAN', value: 'MAN' },
    { caption: 'Yamaha', value: 'Yamaha' },
    { caption: 'Mercedes-Benz', value: 'Mercedes-Benz' },
    { caption: 'Chevrolet', value: 'Chevrolet' },
  ];

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    public readonly vehicleService: VehicleService,
    public readonly router: Router,
    private readonly confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    this.vehicleService.getList();
    this.dataSource = new MatTableDataSource(this.vehicleService.vehicles);
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
        message: `Будет удалено ${ids.length} элементов.`,
      })
      .subscribe((answer: boolean) => {
        if (answer) {
          this.vehicleService.deleteByIds(ids);
          this.dataSource = new MatTableDataSource(this.vehicleService.vehicles);
          this.selectedRows = this.selectedRows.filter(id => !ids.includes(id));
        }
      });
  }
}
