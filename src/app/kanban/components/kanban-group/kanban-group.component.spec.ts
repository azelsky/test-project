import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanGroupComponent } from './kanban-group.component';

describe('KanbanGroupComponent', () => {
  let component: KanbanGroupComponent;
  let fixture: ComponentFixture<KanbanGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
