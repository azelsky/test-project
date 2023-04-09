import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { assoc } from 'ramda';
import { isNotNilOrEmpty } from 'ramda-adjunct';
import { filter, mergeMap, Observable, take, tap } from 'rxjs';

import {
  createTask,
  KanbanNewTaskModel,
  KanbanStateModel,
  KanbanTaskModel,
  selectCurrentTask,
  setCurrentTaskId,
  updateTask
} from '@store/kanban-store';

import { TaskDataDialogDataModel } from '../../models';
import { TASK_DATA_DIALOG_CONFIG } from '../../task-data-dialog.constants';
import { TaskDataContainer } from '../task-data/task-data.container';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogWrapperContainer implements OnInit {
  private readonly _currentTask$: Observable<KanbanTaskModel | null> = this._store.select(selectCurrentTask);

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _router: Router,
    private readonly _store: Store<KanbanStateModel>
  ) {
  }

  public ngOnInit(): void {
    this._openDialog();
  }

  private _openDialog(): void {
    this._currentTask$
      .pipe(
        take(1),
        mergeMap((task: KanbanTaskModel | null) => {
          const taskDataDialogConfig: MatDialogConfig<TaskDataDialogDataModel> =
            assoc<'data', MatDialogConfig<TaskDataDialogDataModel>>('data', { task }, TASK_DATA_DIALOG_CONFIG);

          return this._dialog.open<TaskDataContainer, TaskDataDialogDataModel, Partial<KanbanTaskModel> | null>(
            TaskDataContainer,
            taskDataDialogConfig
          )
            .afterClosed()
            .pipe(
              take(1),
              tap(() => this._router.navigate(['kanban'])),
              filter(isNotNilOrEmpty)
            )
        })
      )
      .subscribe((task: Partial<KanbanTaskModel>) => {
        if (!task.id) {
          this._store.dispatch(createTask({ task: task as KanbanNewTaskModel }))
        }
        else {
          this._store.dispatch(updateTask({ update: { id: task.id, changes: task }}))
        }

        this._store.dispatch(setCurrentTaskId({ id: null }))
      })
  }
}
