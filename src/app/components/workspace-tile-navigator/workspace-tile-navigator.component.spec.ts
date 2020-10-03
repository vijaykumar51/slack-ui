import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceTileNavigatorComponent } from './workspace-tile-navigator.component';

describe('WorkspaceTileNavigatorComponent', () => {
  let component: WorkspaceTileNavigatorComponent;
  let fixture: ComponentFixture<WorkspaceTileNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceTileNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceTileNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
