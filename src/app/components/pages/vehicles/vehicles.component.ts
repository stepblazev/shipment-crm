import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { VehiclesList } from 'src/app/models/vehicle.interface';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent implements AfterViewInit {
  public displayedColumns: string[] = [
    'select',
    'id',
    'status',
    'type',
    'make',
    'model',
    'year',
    'load_capacity',
    'registration.number',
    'registration.country',
    'registration.state',
  ];
  
  public dataSource = new MatTableDataSource(VehiclesList);
  public selectedRows: number[] = [];
  
  @ViewChild(MatSort) sort: MatSort | undefined;

  ngAfterViewInit() {
    if (this.sort) this.dataSource.sort = this.sort;
  }
  
  public toggleSelect(selectedId: number): void {
    if (!this.selectedRows.includes(selectedId)) {
        this.selectedRows = [...this.selectedRows, selectedId];
    } else {
        this.selectedRows = this.selectedRows.filter(id => id != selectedId);
    }
  }
  
  public setAll(state: boolean): void {
    if (state) {
        this.selectedRows = this.dataSource.data.map(row => row.id);
    } else {
        this.selectedRows = [];
    }
  }
}
