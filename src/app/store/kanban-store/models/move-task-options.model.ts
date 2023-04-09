import { KanbanTaskStatusType } from './kanban-task-status.type';

export interface MoveTaskOptionsModel {
  prevSource: KanbanTaskStatusType,
  newSource: KanbanTaskStatusType,
  newIndex: number,
  taskId: string
}
