import { InjectionToken, Provider } from '@angular/core';

import { LayoutStateModel } from '@store/layout-store';

const STORAGE_KEYS: (keyof LayoutStateModel)[] = ['themeMode']

export const LAYOUT_STORAGE_KEYS =
  new InjectionToken<string[]>('store.layout.localStorage.keys');

export const LAYOUT_STORAGE_KEYS_PROVIDER: Provider = {
  provide: LAYOUT_STORAGE_KEYS,
  useValue: STORAGE_KEYS
};
