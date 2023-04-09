import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';

const APP_IMPORTS: Type<unknown>[] = [AppRoutingModule, CoreModule];

const NG_IMPORTS: Type<unknown>[] = [BrowserModule, BrowserAnimationsModule]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...APP_IMPORTS,
    ...NG_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
