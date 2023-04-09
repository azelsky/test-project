import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { KANBAN_KEY } from './kanban.constants';
import { kanbanReducer } from './kanban.reducer';
import { KanbanEffects } from './kanban.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(KANBAN_KEY, kanbanReducer),
    EffectsModule.forFeature([KanbanEffects])
  ]
})
export class KanbanStoreModule {}
