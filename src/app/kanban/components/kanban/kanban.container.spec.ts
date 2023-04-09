import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanContainer } from './kanban.container';

describe('KanbanListComponent', () => {
  let component: KanbanContainer;
  let fixture: ComponentFixture<KanbanContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
