import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KanbanContainer } from './components/kanban/kanban.container';
import { TASK_DATA_DIALOG_ID } from './modals/task-data';

const dialogs: Routes = [
  {
    path: TASK_DATA_DIALOG_ID,
    outlet: 'dialogs',
    loadChildren: () =>
      import('./modals/task-data/task-data-dialog.module').then(m => m.TaskDataDialogModule)
  }
];

const routes: Routes = [
  { path: '', component: KanbanContainer,
  children: dialogs},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanRoutingModule {}
