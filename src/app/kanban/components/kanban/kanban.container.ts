import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  moveTask,
  deleteTask,
  setCurrentTaskId,
  KanbanStateModel,
  KanbanTaskModel,
  MoveTaskOptionsModel,
  DeleteTaskOptionsModel,
  selectOpenTasks,
  selectInProgressTasks,
  selectDoneTasks
} from '@store/kanban-store';

import { TASK_DATA_DIALOG_ID } from '../../modals/task-data';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.container.html',
  styleUrls: ['./kanban.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KanbanContainer {
  public readonly openTasks$: Observable<KanbanTaskModel[]> = this._store.select(selectOpenTasks);
  public readonly inProgressTasks$: Observable<KanbanTaskModel[]> = this._store.select(selectInProgressTasks);
  public readonly doneTasks$: Observable<KanbanTaskModel[]> = this._store.select(selectDoneTasks);

  constructor(
    private readonly _store: Store<KanbanStateModel>,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
  }

  public onMoveTask(event: MoveTaskOptionsModel): void {
    this._store.dispatch(moveTask(event));
  }

  public onDeleteTask(event: DeleteTaskOptionsModel): void {
    this._store.dispatch(deleteTask(event))
  }

  public onOpenCreateTaskModal(): void {
    this._openTaskModalModal()
  }

  public onOpenEditTaskModal(taskId: string): void {
    this._store.dispatch(setCurrentTaskId({ id: taskId }));

    this._openTaskModalModal();
  }

  private _openTaskModalModal(): void {
    this._router.navigate(['kanban', { outlets: { dialogs: TASK_DATA_DIALOG_ID } }])
  }
}
