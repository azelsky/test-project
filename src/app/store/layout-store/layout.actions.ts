import { createAction } from '@ngrx/store';

enum LayoutActionTypes {
  SetDarkMode = '[Layout] Set Dark Mode',
  SetLightMode = '[Layout] Set Light Mode',
}

export const setDarkMode = createAction(
  LayoutActionTypes.SetDarkMode
)

export const setLightMode = createAction(
  LayoutActionTypes.SetLightMode
)
