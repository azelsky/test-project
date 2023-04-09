import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { prop } from 'ramda';
import { isNull } from 'ramda-adjunct';

import { KanbanStateModel, KanbanTaskModel } from './models';
import { adapter } from './kanban.adapter';
import { KANBAN_KEY } from './kanban.constants';

export const selectKanbanState: MemoizedSelector<object, KanbanStateModel> =
  createFeatureSelector<KanbanStateModel>(KANBAN_KEY);

const { selectEntities } = adapter.getSelectors(selectKanbanState);

export const selectOpenIds: MemoizedSelector<KanbanStateModel, string[]> = createSelector<
  KanbanStateModel,
  KanbanStateModel,
  string[]
>(
  selectKanbanState,
  prop('openIds')
);

export const selectInProgressIds: MemoizedSelector<KanbanStateModel, string[]> = createSelector<
  KanbanStateModel,
  KanbanStateModel,
  string[]
>(
  selectKanbanState,
  prop('inProgressIds')
);

export const selectDoneIds: MemoizedSelector<KanbanStateModel, string[]> = createSelector<
  KanbanStateModel,
  KanbanStateModel,
  string[]
>(
  selectKanbanState,
  prop('doneIds')
);

export const selectOpenTasks: MemoizedSelector<KanbanStateModel, KanbanTaskModel[]> = createSelector<
  KanbanStateModel,
  string[],
  Dictionary<KanbanTaskModel>,
  KanbanTaskModel[]
>(
  selectOpenIds,
  selectEntities,
  (ids: string[], entities: Dictionary<KanbanTaskModel>): KanbanTaskModel[] =>
    ids.map((id: string): KanbanTaskModel => entities[id] as KanbanTaskModel)
);

export const selectInProgressTasks: MemoizedSelector<KanbanStateModel, KanbanTaskModel[]> = createSelector<
  KanbanStateModel,
  string[],
  Dictionary<KanbanTaskModel>,
  KanbanTaskModel[]
>(
  selectInProgressIds,
  selectEntities,
  (ids: string[], entities: Dictionary<KanbanTaskModel>): KanbanTaskModel[] =>
    ids.map((id: string): KanbanTaskModel => entities[id] as KanbanTaskModel)
);

export const selectDoneTasks: MemoizedSelector<KanbanStateModel, KanbanTaskModel[]> = createSelector<
  KanbanStateModel,
  string[],
  Dictionary<KanbanTaskModel>,
  KanbanTaskModel[]
>(
  selectDoneIds,
  selectEntities,
  (ids: string[], entities: Dictionary<KanbanTaskModel>): KanbanTaskModel[] =>
    ids.map((id: string): KanbanTaskModel => entities[id] as KanbanTaskModel)
);

export const selectCurrentTaskId: MemoizedSelector<KanbanStateModel, string | null> = createSelector<
  KanbanStateModel,
  KanbanStateModel,
  string | null
>(
  selectKanbanState,
  prop('currentTaskId')
);

export const selectCurrentTask: MemoizedSelector<KanbanStateModel, KanbanTaskModel | null> = createSelector<
  KanbanStateModel,
  Dictionary<KanbanTaskModel>,
  string | null,
  KanbanTaskModel | null
>(
  selectEntities,
  selectCurrentTaskId,
  (entities: Dictionary<KanbanTaskModel>, id: string | null) => {
    if (isNull(id)) return null;

    return entities[id]!
  }
);
