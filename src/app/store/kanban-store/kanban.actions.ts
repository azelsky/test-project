import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import {
  DeleteTaskOptionsModel,
  KanbanNewTaskModel,
  KanbanTaskModel,
  MoveTaskOptionsModel
} from './models';

enum KanbanActionTypes {
  CreateTask = '[Kanban] Create Task',
  UpdateTask = '[Kanban] Update Task',
  DeleteTask = '[Kanban] Delete Task',
  DeleteTaskEntity = '[Kanban] Delete Task Entity',
  MoveTask = '[Kanban] Move Task',

  AddToOpen = '[Kanban] Add to Open',
  DeleteFromOpen = '[Kanban] Delete from Open',

  AddToInProgress = '[Kanban] Add to In Progress',
  DeleteFromInProgress = '[Kanban] Delete from In Progress',

  AddToDone = '[Kanban] Add to Done',
  DeleteFromDone = '[Kanban] Delete from Done',

  SetCurrentTaskId = '[Kanban] Set Current Task Id'
}

export const createTask = createAction(
  KanbanActionTypes.CreateTask,
  props<{ task: KanbanNewTaskModel }>()
);

export const updateTask = createAction(
  KanbanActionTypes.UpdateTask,
  props<{ update: Update<KanbanTaskModel> }>()
);

export const deleteTask = createAction(
  KanbanActionTypes.DeleteTask,
  props<DeleteTaskOptionsModel>()
);

export const deleteTaskEntity = createAction(
  KanbanActionTypes.DeleteTaskEntity,
  props<{ id: string }>()
);

export const moveTask = createAction(
  KanbanActionTypes.MoveTask,
  props<MoveTaskOptionsModel>()
);

export const addToOpen = createAction(
  KanbanActionTypes.AddToOpen,
  props<{ id: string, index: number }>()
);

export const deleteFromOpen = createAction(
  KanbanActionTypes.DeleteFromOpen,
  props<{ id: string }>()
);

export const addToInProgress = createAction(
  KanbanActionTypes.AddToInProgress,
  props<{ id: string, index: number }>()
);

export const deleteFromInProgress = createAction(
  KanbanActionTypes.DeleteFromInProgress,
  props<{ id: string }>()
);

export const addToDone = createAction(
  KanbanActionTypes.AddToDone,
  props<{ id: string, index: number }>()
);

export const deleteFromDone = createAction(
  KanbanActionTypes.DeleteFromDone,
  props<{ id: string }>()
);

export const setCurrentTaskId = createAction(
  KanbanActionTypes.SetCurrentTaskId,
  props<{ id: string | null }>()
);
