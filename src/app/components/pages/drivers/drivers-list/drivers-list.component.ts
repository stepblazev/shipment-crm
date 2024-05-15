import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { Router, RouterLink } from '@angular/router';
import { DriverService } from 'src/app/models/drivers/driver.service';
import { IDriver } from 'src/app/models/drivers/models/driver.interface';
import { DataTableComponent, IDataTableColumn } from 'src/app/components/ui/data-table/data-table.component';

@Component({
  standalone: true,
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss'],
  imports: [CommonModule, RouterLink, DataTableComponent],
})
export class DriversListComponent implements OnInit {
  public columns: IDataTableColumn[] = [
    {
      key: 'first_name',
      alias: 'Имя',
      sort: true,
    },
    {
      key: 'last_name',
      alias: 'Фамилия',
      sort: true,
    },
    {
      key: 'birth_date',
      alias: 'Дата рождения',
      sort: true,
    },
    {
      key: 'phone',
      alias: 'Телефон',
      sort: true,
    },
    {
      key: 'email',
      alias: 'Эл.почта',
      sort: true,
    },
    {
      key: 'license_type',
      alias: 'Тип прав',
      sort: true,
    },
    {
      key: 'license_number',
      alias: 'Номер прав',
      sort: true,
    },
    {
      key: 'license_expire_date',
      alias: 'Права истекают',
      sort: true,
    },
  ];

  public selectedRows: number[] = [];
  public drivers: IDriver[] = [];

  constructor(
    private readonly router: Router,
    private readonly confirmService: ConfirmService,
    private readonly driverService: DriverService
  ) {}

  ngOnInit(): void {
    this.driverService.getList();
    this.drivers = this.driverService.drivers;
  }

  public toDetail(driver: any): void {
    this.router.navigate(['drivers', (driver as IDriver).id]);
  }
  
  public deleteByIds(ids: number[]): void {
    this.confirmService
      .confirm({
        title: 'Удалить выбранные элементы?',
        message: `Будет удалено элементов: ${ids.length}`,
      })
      .subscribe((answer: boolean) => {
        if (answer) {
          this.driverService.deleteByIds(ids);
          this.drivers = this.driverService.drivers;
        }
      });
  }
}
