import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AssetService } from 'src/app/models/assets/asset.service';

@Component({
  selector: 'app-fleet-assets',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fleet-assets.component.html',
  styleUrl: './fleet-assets.component.scss',
})
export class FleetAssetsComponent {
  constructor(public readonly assetService: AssetService) {}

  ngOnInit(): void {
    this.assetService.getList();
  }
}
