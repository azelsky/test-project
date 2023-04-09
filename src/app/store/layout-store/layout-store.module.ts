import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { LAYOUT_KEY } from './layout.constants';
import { layoutReducer } from './layout.reducer';
import {
  LAYOUT_STORAGE_KEYS_PROVIDER,
  LAYOUT_LOCAL_STORAGE_KEY_PROVIDER,
  LAYOUT_CONFIG_TOKEN_PROVIDER,
  LAYOUT_CONFIG_TOKEN
} from './providers';

@NgModule({
  imports: [
    StoreModule.forFeature(LAYOUT_KEY, layoutReducer, LAYOUT_CONFIG_TOKEN)
  ],
  providers: [
    LAYOUT_LOCAL_STORAGE_KEY_PROVIDER,
    LAYOUT_STORAGE_KEYS_PROVIDER,
    LAYOUT_CONFIG_TOKEN_PROVIDER
  ]
})
export class LayoutStoreModule {}
