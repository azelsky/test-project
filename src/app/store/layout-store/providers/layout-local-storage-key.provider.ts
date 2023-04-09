import { InjectionToken, Provider } from '@angular/core';

export const LAYOUT_LOCAL_STORAGE_KEY =
  new InjectionToken<string>('store.layout.localStorage.storageKey');

export const LAYOUT_LOCAL_STORAGE_KEY_PROVIDER: Provider = {
  provide: LAYOUT_LOCAL_STORAGE_KEY,
  useValue: '__layout_storage_'
};
