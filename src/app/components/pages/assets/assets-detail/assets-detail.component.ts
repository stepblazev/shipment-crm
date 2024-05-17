import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IOption, SelectComponent } from 'src/app/components/ui/select/select.component';
import { IAsset, TAssetStatus } from 'src/app/models/assets/asset.interface';
import { AssetService } from 'src/app/models/assets/asset.service';
import { statusOptions } from 'src/app/models/assets/options';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-assets-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SelectComponent,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './assets-detail.component.html',
  styleUrl: './assets-detail.component.scss',
})
export class AssetsDetailComponent implements OnInit {
  public asset: IAsset | null;
  public isEdit: boolean = false;

  public delivery_date: Date;
  public delivery_address: string = '';
  public name: string = '';
  public weight: string = '';
  public width: string = '';
  public height: string = '';

  public statusOptions: IOption<TAssetStatus>[] = statusOptions;
  public currentStatusOption: IOption<TAssetStatus>;

  constructor(
    private readonly title: Title,
    private readonly router: Router,
    private readonly confirmService: ConfirmService,
    private readonly assetService: AssetService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.asset = this.activatedRoute.snapshot.data['asset'];
    if (this.asset) {
      this.title.setTitle(this.asset.name);
      this.reset();
    }
  }

  public reset(): void {
    if (!this.asset) return;
    this.currentStatusOption =
      statusOptions.find((status) => status.value == this.asset?.status) ??
      statusOptions[0];

    this.delivery_date = this.asset.delivery_date;
    this.delivery_address = this.asset.delivery_address;
    this.name = this.asset.name;
    this.weight = this.asset.weight.toString();
    this.width = this.asset.width.toString();
    this.height = this.asset.height.toString();

    this.isEdit = false;
  }

  public update(): void {
    if (!this.asset) return;
    this.assetService.update({
      id: this.asset.id,
      status: this.currentStatusOption.value,
      delivery_date: this.delivery_date,
      delivery_address: this.delivery_address,
      name: this.name,
      weight: this.weight,
      width: this.width,
      height: this.height,
    });
    this.isEdit = false;
  }

  public delete(): void {
    if (!this.asset) return;
    this.confirmService
      .confirm({
        title: 'Удалить груз?',
        message: `Груз '${this.asset.name}' будет удален`,
      })
      .subscribe((answer) => {
        if (answer && this.asset) {
          this.assetService.deleteByIds([this.asset.id]);
          this.router.navigate(['assets']);
        }
      });
  }
}
