import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store, Action } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { DARK_MODE, selectThemeMode, setDarkMode, setLightMode, ThemeModeType, LayoutStateModel } from '@store/layout-store';

import { PRIMARY_COLOR } from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  public switcherColor: ThemePalette;
  public isDarkMode: boolean = false;

  private readonly _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(DOCUMENT) private readonly _document: Document,
    private readonly _renderer: Renderer2,
    private readonly _store: Store<LayoutStateModel>
  ) {}

  public ngOnInit(): void {
    this._setSubscriptions();
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  public onThemeSwitcherChange({ checked: isDarkMode }: MatSlideToggleChange): void {
    const action: Action = isDarkMode ? setDarkMode() : setLightMode();
    this._store.dispatch(action);
  }

  private _applyTheme(className: ThemeModeType) {
    this._renderer.setAttribute(this._document.body, 'class', className);
    this.switcherColor = className === DARK_MODE ? PRIMARY_COLOR : undefined;
  }

  private _setSubscriptions(): void {
    this._store.select(selectThemeMode).pipe(takeUntil(this._unsubscribe$)).subscribe((theme) => {
      this.isDarkMode = theme === DARK_MODE;
      this._applyTheme(theme);
    });
  }
}
