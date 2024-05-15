import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { IAsset } from 'src/app/models/assets/asset.interface';
import { AssetService } from 'src/app/models/assets/asset.service';

export const AssetDetailResolver: ResolveFn<IAsset | null> = (route: ActivatedRouteSnapshot) => {
  const assetService = inject(AssetService);
  assetService.getList();
  
  const assetId = route.paramMap.get('id');
  return (assetService.assets.find((asset) => assetId == asset.id.toString()) ?? null);
};
