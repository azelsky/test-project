import { InjectionToken, Provider } from '@angular/core';
import { Action, StoreConfig } from '@ngrx/store';

import { localStorageReducer, LocalStorageService } from '@store/core/meta-reducers';

import { LayoutStateModel } from '../models';
import { LAYOUT_STORAGE_KEYS } from './layout-storage-keys.provider';
import { LAYOUT_LOCAL_STORAGE_KEY } from './layout-local-storage-key.provider';

function getLayoutConfig(
  saveKeys: (keyof LayoutStateModel)[],
  localStorageKey: string,
  localStorageService: LocalStorageService<LayoutStateModel, keyof LayoutStateModel>
) {
  return { metaReducers: [localStorageReducer(saveKeys, localStorageKey, localStorageService)] }
}

export const LAYOUT_CONFIG_TOKEN =
  new InjectionToken<StoreConfig<LayoutStateModel, Action>>('store.layout.configToken');

export const LAYOUT_CONFIG_TOKEN_PROVIDER: Provider = {
  provide: LAYOUT_CONFIG_TOKEN,
  useFactory: getLayoutConfig,
  deps: [LAYOUT_STORAGE_KEYS, LAYOUT_LOCAL_STORAGE_KEY, LocalStorageService]
}
