import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { concatMap, Observable } from 'rxjs';

import { deleteTask, deleteTaskEntity, moveTask, updateTask } from './kanban.actions';
import { getAddFunction, getDeleteFunction } from './kanban.utils';
import { DeleteTaskOptionsModel, MoveTaskOptionsModel } from './models';

@Injectable()
export class KanbanEffects {
  public readonly deleteTask$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType(deleteTask),
    concatMap(({ id, status }: DeleteTaskOptionsModel) => {
      return [
        deleteTaskEntity({ id }),
        getDeleteFunction(status, { id })
      ]
    })
  ))

  public readonly moveTask$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType(moveTask),
    concatMap((options: MoveTaskOptionsModel) => {
      return [
        getDeleteFunction(options.prevSource, { id: options.taskId }),
        getAddFunction(options.newSource, { id: options.taskId, index: options.newIndex }),
        updateTask({ update: { id: options.taskId, changes: { status: options.newSource } } })
      ]
    })
  ));

  constructor(private readonly _actions$: Actions) {
  }
}
