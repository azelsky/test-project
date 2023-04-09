import { KanbanTaskStatusType } from '@store/kanban-store';

export interface GroupDescriptionModel {
  source: KanbanTaskStatusType;
  name: string;
}
