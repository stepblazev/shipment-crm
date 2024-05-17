import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router, RouterLink } from '@angular/router';
import { IOption, SelectComponent } from 'src/app/components/ui/select/select.component';
import { TAssetStatus } from 'src/app/models/assets/asset.interface';
import { AssetService } from 'src/app/models/assets/asset.service';
import { statusOptions } from 'src/app/models/assets/options';

@Component({
  selector: 'app-assets-new',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    SelectComponent,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './assets-new.component.html',
  styleUrl: './assets-new.component.scss',
})
export class AssetsNewComponent {
  public delivery_date: Date;
  public delivery_address: string = '';
  public name: string = '';
  public weight: string = '';
  public width: string = '';
  public height: string = '';

  public statusOptions: IOption<TAssetStatus>[] = statusOptions;
  public currentStatusOption: IOption<TAssetStatus>;

  constructor(
    private readonly router: Router,
    private readonly assetService: AssetService
  ) {}

  public create(): void {
    this.assetService.getList();
    this.assetService.create({
      status: this.currentStatusOption.value,
      delivery_date: this.delivery_date,
      delivery_address: this.delivery_address,
      name: this.name,
      weight: this.weight,
      width: this.width,
      height: this.height,
    });

    this.router.navigate(['assets']);
  }
}
