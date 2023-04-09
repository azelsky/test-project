import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'kanban',
    loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule)
  },
  {
    path: '**',
    redirectTo: 'kanban',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
