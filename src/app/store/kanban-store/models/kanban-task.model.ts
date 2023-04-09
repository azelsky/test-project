import { KanbanTaskStatusType } from './kanban-task-status.type';

export interface KanbanTaskModel {
  id: string;
  title: string;
  status: KanbanTaskStatusType
}
