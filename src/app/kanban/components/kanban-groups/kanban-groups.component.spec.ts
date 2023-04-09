import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanGroupsComponent } from './kanban-groups.component';

describe('KanbanComponent', () => {
  let component: KanbanGroupsComponent;
  let fixture: ComponentFixture<KanbanGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
