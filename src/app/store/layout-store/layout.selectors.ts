import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { LayoutStateModel, ThemeModeType } from './models';
import { LAYOUT_KEY } from './layout.constants';

export const selectLayoutState: MemoizedSelector<object, LayoutStateModel> =
  createFeatureSelector<LayoutStateModel>(LAYOUT_KEY);

export const selectThemeMode: MemoizedSelector<LayoutStateModel, ThemeModeType> = createSelector<
  LayoutStateModel,
  LayoutStateModel,
  ThemeModeType
>(
  selectLayoutState,
  (state: LayoutStateModel) => state.themeMode
);
