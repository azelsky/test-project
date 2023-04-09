import { EntityState } from "@ngrx/entity";

import { KanbanTaskModel } from './kanban-task.model';

export interface KanbanStateModel extends EntityState<KanbanTaskModel> {
  openIds: string[];
  inProgressIds: string[];
  doneIds: string[];
  currentTaskId: string | null;
}
