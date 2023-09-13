import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupStageGamesComponent } from './group-stage-games.component';

describe('GroupStageGamesComponent', () => {
  let component: GroupStageGamesComponent;
  let fixture: ComponentFixture<GroupStageGamesComponent>;

  beforeEach(waitForAsync(() => {
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
