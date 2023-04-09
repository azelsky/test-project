import { createReducer, on } from '@ngrx/store';

import { LayoutStateModel } from './models';
import { DARK_MODE, LIGHT_MODE } from './layout.constants';
import { initialState } from './layout.state';
import { setDarkMode, setLightMode } from './layout.actions';

export const layoutReducer = createReducer(
  initialState,

  on(setDarkMode, (state: LayoutStateModel): LayoutStateModel => ({ ...state, themeMode: DARK_MODE })),

  on(setLightMode, (state: LayoutStateModel): LayoutStateModel => ({ ...state, themeMode: LIGHT_MODE }))
)
