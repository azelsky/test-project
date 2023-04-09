import { NgModule, Optional, SkipSelf, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

import { RootStoreModule } from '@store/root-store.module';
import { LayoutStoreModule } from '@store/layout-store';

import { HeaderComponent } from './header/header.component';

const APP_IMPORTS: Type<unknown>[] = [RootStoreModule, LayoutStoreModule];

const NG_IMPORTS: Type<unknown>[] = [CommonModule, FlexLayoutModule];

const MAT_IMPORTS: Type<unknown>[] = [MatToolbarModule, MatIconModule, MatSlideToggleModule];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    ...APP_IMPORTS,
    ...NG_IMPORTS,
    ...MAT_IMPORTS
  ],
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
