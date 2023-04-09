import { DONE, IN_PROGRESS, OPEN } from '@store/kanban-store';

import { GroupDescriptionModel } from '../../models';

export const GROUPS_DESCRIPTION: GroupDescriptionModel[] = [
  {
    source: OPEN,
    name: 'Open'
  }, {
    source: IN_PROGRESS,
    name: 'In Progress'
  },
  {
    source: DONE,
    name: 'Done'
  }];
