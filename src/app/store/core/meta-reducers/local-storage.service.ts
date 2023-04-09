import {Injectable} from '@angular/core';

@Injectable( { providedIn: 'root' } )
export class LocalStorageService<State, Prop extends keyof State> {
  constructor() {}

  setSavedState(state: Pick<State, Prop>, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  getSavedState(localStorageKey: string): Partial<State> {
    const state = localStorage.getItem(localStorageKey);

    if (state === null) {
      return {}
    }

    return JSON.parse(state);
  }
}
