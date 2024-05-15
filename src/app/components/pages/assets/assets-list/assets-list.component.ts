import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataTableComponent, IDataTableColumn } from 'src/app/components/ui/data-table/data-table.component';
import { IAsset } from 'src/app/models/assets/asset.interface';
import { AssetService } from 'src/app/models/assets/asset.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  standalone: true,
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrl: './assets-list.component.scss',
  imports: [CommonModule, RouterLink, DataTableComponent],
})
export class AssetsListComponent {
  public columns: IDataTableColumn[] = [
    {
      key: 'status',
      alias: 'Статус',
      sort: true,
    },
    {
      key: 'delivery_date',
      alias: 'Дата доставки',
      sort: true,
    },
    {
      key: 'delivery_address',
      alias: 'Адрес доставки',
      sort: true,
    },
    {
      key: 'name',
      alias: 'Наименование',
      sort: true,
    },
    {
      key: 'weight',
      alias: 'Вес, кг',
      sort: true,
    },
    {
      key: 'width',
      alias: 'Ширина, см',
      sort: true,
    },
    {
      key: 'height',
      alias: 'Высота, см',
      sort: true,
    },
  ];

  public selectedRows: number[] = [];
  public assets: IAsset[] = [];

  constructor(
    private readonly router: Router,
    private readonly confirmService: ConfirmService,
    private readonly assetService: AssetService
  ) {}

  ngOnInit(): void {
    this.assetService.getList();
    this.assets = this.assetService.assets;
  }

  public toDetail(asset: any): void {
    this.router.navigate(['assets', (asset as IAsset).id]);
  }
  
  public deleteByIds(ids: number[]): void {
    this.confirmService
      .confirm({
        title: 'Удалить выбранные товары?',
        message: `Будет удалено товаров: ${ids.length}`,
      })
      .subscribe((answer: boolean) => {
        if (answer) {
          this.assetService.deleteByIds(ids);
          this.assets = this.assetService.assets;
        }
      });
  }
}
