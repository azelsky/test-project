import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { KanbanTaskModel, MoveTaskOptionsModel, DeleteTaskOptionsModel, DONE, IN_PROGRESS, OPEN } from '@store/kanban-store';

import { GroupDescriptionModel } from '../../models';
import { GROUPS_DESCRIPTION } from './kanban-groups.constants';

@Component({
  selector: 'app-kanban-groups',
  templateUrl: './kanban-groups.component.html',
  styleUrls: ['./kanban-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KanbanGroupsComponent {
  @Input() public openTasks: KanbanTaskModel[] = [];
  @Input() public inProgressTasks: KanbanTaskModel[] = [];
  @Input() public doneTasks: KanbanTaskModel[] = [];

  @Output() public moveTask: EventEmitter<MoveTaskOptionsModel> = new EventEmitter<MoveTaskOptionsModel>();
  @Output() public deleteTask: EventEmitter<DeleteTaskOptionsModel> = new EventEmitter<DeleteTaskOptionsModel>();
  @Output() public editTask: EventEmitter<string> = new EventEmitter<string>();

  public get tasks() {
    return {
      [OPEN]: this.openTasks,
      [IN_PROGRESS]: this.inProgressTasks,
      [DONE]: this.doneTasks
    }
  }

  public groupsDescription: GroupDescriptionModel[] = GROUPS_DESCRIPTION;

  public onMoveTask(event: MoveTaskOptionsModel): void {
    this.moveTask.emit(event);
  }

  public onDeleteTask(event: DeleteTaskOptionsModel): void {
    this.deleteTask.emit(event);
  }

  public onEditTask(id: string): void {
    this.editTask.emit(id);
  }
}
