import { NgModule, Type } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';

import { KanbanStoreModule } from '@store/kanban-store';

import { KanbanContainer } from './components/kanban/kanban.container';
import { KanbanGroupsComponent } from './components/kanban-groups/kanban-groups.component';
import { KanbanGroupComponent } from './components/kanban-group/kanban-group.component';
import { TaskComponent } from './components/task/task.component';
import { KanbanRoutingModule } from './kanban-routing.module';

const APP_IMPORTS: Type<unknown>[] = [KanbanStoreModule, KanbanRoutingModule]

const DECLARATIONS: Type<unknown>[] = [
  KanbanContainer,
  KanbanGroupsComponent,
  KanbanGroupComponent,
  TaskComponent
];

const NG_IMPORTS: Type<unknown>[] = [CommonModule, FlexLayoutModule, ReactiveFormsModule, DragDropModule, ScrollingModule];


const MAT_IMPORTS: Type<unknown>[] = [
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    ...APP_IMPORTS,
    ...NG_IMPORTS,
    ...MAT_IMPORTS
  ],
  declarations: [
    ...DECLARATIONS
  ]
})
export class KanbanModule {}
