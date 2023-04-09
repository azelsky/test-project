import { DONE, IN_PROGRESS, OPEN } from '../kanban.constants';

export type KanbanTaskStatusType = typeof OPEN | typeof IN_PROGRESS | typeof DONE;
