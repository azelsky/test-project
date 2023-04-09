import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isNotNull } from 'ramda-adjunct';
import { mergeRight } from 'ramda';

import { KanbanTaskModel } from '@store/kanban-store';

import { TaskDataDialogDataModel, NewTaskFormModel } from '../../models';
import { CREATE_ACTION, EDIT_ACTION } from '../../task-data-dialog.constants';

@Component({
  selector: 'app-task-data',
  templateUrl: './task-data.container.html',
  styleUrls: ['./task-data.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDataContainer {
  public actionName: string;
  public isEditMode: boolean;

  public form: FormGroup<NewTaskFormModel> = this._fb.group({
    title: this._fb.nonNullable.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly _data: TaskDataDialogDataModel,
    private readonly _fb: FormBuilder,
    private readonly _ref: MatDialogRef<TaskDataContainer, Partial<KanbanTaskModel> | null>,

  ) {
    this.isEditMode = isNotNull(this._data.task);
    this.actionName = this.isEditMode ? EDIT_ACTION : CREATE_ACTION;

    this._initForm();
  }

  public onSubmit(): void {
    const formValue = this.form.getRawValue();
    const result = this.isEditMode
      ? mergeRight(this._data.task as KanbanTaskModel, formValue)
      : formValue;

    this._ref.close(result);
  }

  public onClose(): void {
    this._ref.close();
  }

  private _initForm() {
    const { task } = this._data;

    if (isNotNull(task)) {
      this.form.patchValue({title: task!.title})
    }
  }
}
