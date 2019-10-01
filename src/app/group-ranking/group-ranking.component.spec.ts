import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRankingComponent } from './group-ranking.component';

describe('GroupRankingComponent', () => {
  let component: GroupRankingComponent;
  let fixture: ComponentFixture<GroupRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
