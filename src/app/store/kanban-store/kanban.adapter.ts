import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { KanbanTaskModel } from './models';

export const adapter: EntityAdapter<KanbanTaskModel> = createEntityAdapter<KanbanTaskModel>()
