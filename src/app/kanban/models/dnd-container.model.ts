import { KanbanTaskModel, KanbanTaskStatusType } from '@store/kanban-store';

export interface DndContainerModel {
  tasks: KanbanTaskModel[];
  source: KanbanTaskStatusType;
}
