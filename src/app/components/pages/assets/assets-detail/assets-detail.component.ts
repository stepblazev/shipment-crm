import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IAsset } from 'src/app/models/assets/asset.interface';
import { AssetService } from 'src/app/models/assets/asset.service';
import { ConfirmService } from 'src/app/shared/services/confirm.service';

@Component({
  selector: 'app-assets-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './assets-detail.component.html',
  styleUrl: './assets-detail.component.scss',
})
export class AssetsDetailComponent implements OnInit {
  public asset: IAsset | null;
  public isEdit: boolean = false;

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
      //   this.reset();
    }
  }

  public reset(): void {}
  public update(): void {}
  public delete(): void {}
}
