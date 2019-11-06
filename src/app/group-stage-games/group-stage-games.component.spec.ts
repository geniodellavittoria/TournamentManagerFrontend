import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStageGamesComponent } from './group-stage-games.component';

describe('GroupStageGamesComponent', () => {
  let component: GroupStageGamesComponent;
  let fixture: ComponentFixture<GroupStageGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupStageGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStageGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
