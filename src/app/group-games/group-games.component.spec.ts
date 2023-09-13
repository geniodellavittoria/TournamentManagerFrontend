import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroupGamesComponent } from './group-games.component';

describe('GroupGamesComponent', () => {
  let component: GroupGamesComponent;
  let fixture: ComponentFixture<GroupGamesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
