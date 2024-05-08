import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { VehiclesList } from 'src/app/models/vehicle.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { IOption, SelectComponent, } from 'src/app/components/ui/select/select.component';

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
export class VehiclesListComponent implements AfterViewInit {
  public displayedColumns: string[] = [
    'select',
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
    private readonly router: Router,
    private readonly confirmService: ConfirmService
  ) {}

  ngAfterViewInit() {
    if (this.sort) this.dataSource.sort = this.sort;
  }
  
  public toDetail(id: string) {
    this.router.navigate(['vehicles', id]);
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
          this.selectedRows = this.selectedRows.filter(
            (id) => !ids.includes(id)
          );
          this.dataSource = new MatTableDataSource(
            VehiclesList.filter((vehicle) => !ids.includes(vehicle.id))
          );
        }
      });
  }

  // FIXME удалить
  public getStatusEmoji(status: string): string {
    switch (status) {
      case 'Works':
        return '🚚';
      case 'Waits':
        return '⌛';
      case 'Repairs':
        return '🪛';
      case 'NotInUse':
        return '🪦';
      default:
        return '-';
    }
  }
}
