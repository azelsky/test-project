import { KanbanTaskModel } from '@store/kanban-store';

export type KanbanNewTaskModel = Omit<KanbanTaskModel, 'id' | 'status'>
