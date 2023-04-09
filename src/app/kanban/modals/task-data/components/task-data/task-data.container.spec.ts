import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDataContainer } from './task-data.container';

describe('TaskDataComponent', () => {
  let component: TaskDataContainer;
  let fixture: ComponentFixture<TaskDataContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDataContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDataContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
