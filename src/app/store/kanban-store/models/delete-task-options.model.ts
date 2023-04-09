import { KanbanTaskStatusType } from './kanban-task-status.type';

export interface DeleteTaskOptionsModel {
  id: string;
  status: KanbanTaskStatusType;
}
