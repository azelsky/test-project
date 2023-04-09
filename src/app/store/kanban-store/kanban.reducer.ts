import { createReducer, on } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { assoc, compose, equals, filter, insert, mergeRight, not, prepend } from 'ramda';

import { KanbanStateModel, KanbanTaskModel } from '@store/kanban-store/models';

import { adapter } from './kanban.adapter';
import {
  addToDone,
  addToInProgress,
  addToOpen,
  createTask, deleteFromDone,
  deleteFromInProgress,
  deleteFromOpen,
  deleteTaskEntity,
  setCurrentTaskId,
  updateTask
} from './kanban.actions';
import { initialState } from './kanban.state';
import { OPEN } from './kanban.constants';

export const kanbanReducer = createReducer(
  initialState,

  on(createTask, (state, { task }) => {
    const id = uuid();
    const newTask: KanbanTaskModel = mergeRight(task, {
      id,
      status: OPEN
    });

    return assoc<'openIds', KanbanStateModel>(
      'openIds',
      prepend<string>(id, state.openIds),
      adapter.addOne(newTask, state)
    );
  }),

  on(updateTask, (state, { update }) => {
    return adapter.updateOne(update, state)
  }),

  on(deleteTaskEntity, (state, { id }) => {
    return adapter.removeOne(id, state)
  }),

  on(addToOpen, (state, { id, index }) => {
    return assoc<'openIds', KanbanStateModel>(
      'openIds',
      insert(index, id, state.openIds),
      state
    );
  }),

  on(deleteFromOpen, (state, { id }) => {
    return assoc<'openIds', KanbanStateModel>(
      'openIds',
      filter(compose(not, equals(id)), state.openIds),
      state
    );
  }),

  on(addToInProgress, (state, { id, index }) => {
    return assoc<'inProgressIds', KanbanStateModel>(
      'inProgressIds',
      insert(index, id, state.inProgressIds),
      state
    );
  }),

  on(deleteFromInProgress, (state, { id }) => {
    return assoc<'inProgressIds', KanbanStateModel>(
      'inProgressIds',
      filter(compose(not, equals(id)), state.inProgressIds),
      state
    );
  }),

  on(addToDone, (state, { id, index }) => {
    return assoc<'doneIds', KanbanStateModel>(
      'doneIds',
      insert(index, id, state.doneIds),
      state
    );
  }),

  on(deleteFromDone, (state, { id }) => {
    return assoc<'doneIds', KanbanStateModel>(
      'doneIds',
      filter(compose(not, equals(id)), state.doneIds),
      state
    );
  }),

  on(setCurrentTaskId, (state, { id }) => {
    return assoc<'currentTaskId', KanbanStateModel>(
      'currentTaskId',
      id,
      state
    );
  })
)
