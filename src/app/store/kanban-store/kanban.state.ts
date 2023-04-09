import { adapter } from './kanban.adapter';
import { KanbanStateModel } from './models';

export const initialState: KanbanStateModel = adapter.getInitialState({
  openIds: [],
  inProgressIds: [],
  doneIds: [],

  currentTaskId: null
})
