import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { TaskDataContainer } from './components/task-data/task-data.container';
import { DialogWrapperContainer } from './components/dialog-wrapper/dialog-wrapper.container';
import { TaskDataDialogRoutingModule } from './task-data-dialog-routing.module';


const DECLARATIONS: Type<unknown>[] = [TaskDataContainer, DialogWrapperContainer];

const APP_IMPORTS: Type<unknown>[] = [TaskDataDialogRoutingModule];

const NG_IMPORTS: Type<unknown>[] = [CommonModule, ReactiveFormsModule];

const MAT_IMPORTS: Type<unknown>[] = [
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...APP_IMPORTS,
    ...NG_IMPORTS,
    ...MAT_IMPORTS
  ]
})
export class TaskDataDialogModule { }
