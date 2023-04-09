import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { head } from 'ramda';

import {
  KanbanTaskModel,
  KanbanTaskStatusType,
  MoveTaskOptionsModel,
  DeleteTaskOptionsModel
} from '@store/kanban-store';

import { DndContainerModel, GroupDescriptionModel } from '../../models';
import { GROUPS_DESCRIPTION } from '../kanban-groups/kanban-groups.constants';

@Component({
  selector: 'app-kanban-group',
  templateUrl: './kanban-group.component.html',
  styleUrls: ['./kanban-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KanbanGroupComponent {
  @Input() public groupDescription: GroupDescriptionModel = head(GROUPS_DESCRIPTION)!;
  @Input() public tasks: KanbanTaskModel[] = [];

  @Output() public moveTask: EventEmitter<MoveTaskOptionsModel> = new EventEmitter<MoveTaskOptionsModel>();
  @Output() public deleteTask: EventEmitter<DeleteTaskOptionsModel> = new EventEmitter<DeleteTaskOptionsModel>();
  @Output() public editTask: EventEmitter<string> = new EventEmitter<string>();

  public trackByFn(index: number, task: KanbanTaskModel): string {
    return task.id
  }

  public drop(event: CdkDragDrop<DndContainerModel, DndContainerModel, KanbanTaskModel>): void {
    this.moveTask.emit({
      prevSource: event.previousContainer.data.source,
      newSource: event.container.data.source,
      newIndex: event.currentIndex,
      taskId: event.item.data.id
    });
  }

  public onDeleteTask(id: string, status: KanbanTaskStatusType): void {
    this.deleteTask.emit({ id, status });
  }

  public onEditTask(id: string): void {
    this.editTask.emit(id);
  }
}
