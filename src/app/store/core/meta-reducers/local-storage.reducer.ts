import { ActionReducer, Action } from '@ngrx/store';

import { pick } from '@core/utils';

import { LocalStorageService } from './local-storage.service';

export function localStorageReducer<
  S extends object, K extends keyof S, A extends Action = Action
>(saveKeys: K[], localStorageKey: string, storageService: LocalStorageService<S, K>) {
  let onInit = true; // after load/refresh…
  return function (reducer: ActionReducer<S, A>) {
    return function (state: S, action: A): S {
      // get the next state.
      const nextState = reducer(state, action);
      // init the application state.
      if (onInit) {
        onInit = false;
        const savedState = storageService.getSavedState(localStorageKey);
        return { ...nextState, ...savedState };
      }

      // save the next state to the application storage.
      const stateToSave = pick(nextState, saveKeys);
      storageService.setSavedState(stateToSave, localStorageKey);

      return nextState;
    };
  };
}
