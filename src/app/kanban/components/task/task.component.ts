import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Input() public title: string = '';

  @Output() public deleteTask: EventEmitter<void> = new EventEmitter<void>();
  @Output() public editTask: EventEmitter<void> = new EventEmitter<void>();

  public onDelete() {
    this.deleteTask.emit()
  }

  public onEdit() {
    this.editTask.emit()
  }
}
