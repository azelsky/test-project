import { Action } from '@ngrx/store';

import { KanbanTaskStatusType } from './models';
import { DONE, IN_PROGRESS } from './kanban.constants';
import {
  addToDone,
  addToInProgress,
  addToOpen,
  deleteFromDone,
  deleteFromInProgress,
  deleteFromOpen
} from './kanban.actions';

export const getDeleteFunction = (source: KanbanTaskStatusType, props: { id: string }) => {
  switch (source) {
    case IN_PROGRESS:
      return deleteFromInProgress(props)
    case DONE:
      return deleteFromDone(props)
    default:
      return deleteFromOpen(props)
  }
}

export const getAddFunction = (source: KanbanTaskStatusType, props: {id: string, index: number}): Action => {
  switch (source) {
    case IN_PROGRESS:
      return addToInProgress(props)
    case DONE:
      return addToDone(props)
    default:
      return addToOpen(props)
  }
}
