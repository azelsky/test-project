import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DialogWrapperContainer } from './components/dialog-wrapper/dialog-wrapper.container';

const routes = [
  {
    path: '',
    component: DialogWrapperContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskDataDialogRoutingModule {}
