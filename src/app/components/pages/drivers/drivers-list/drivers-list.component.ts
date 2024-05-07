import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DriversList } from 'src/app/models/driver.interface';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss', '../../../../../styles/mat/table.scss'],
  imports: [CommonModule, MatTableModule, MatSortModule, MatCheckboxModule, RouterLink],
})
export class DriversListComponent {
    public displayedColumns: string[] = [
        'select',
        'id',
        'first_name',
        'last_name',
        'birth_date',
        'phone',
        'email',
        'license_type',
        'license_number',
        'license_expire_date',
    ];

    public dataSource = new MatTableDataSource(DriversList);
    public selectedRows: number[] = [];

    @ViewChild(MatSort) sort: MatSort | undefined;

    constructor(private readonly confirmService: ConfirmService) {}

    ngAfterViewInit() {
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
        this.confirmService.confirm({
                title: 'Удалить выбранные элементы?', 
                message: `Будет удалено ${ids.length} элементов.`
            }).subscribe((answer: boolean) => {
            if (answer) {
                this.selectedRows = this.selectedRows.filter(id => !ids.includes(id));
                this.dataSource = new MatTableDataSource(DriversList.filter(driver => !ids.includes(driver.id)));
            }
        })
    }
}
