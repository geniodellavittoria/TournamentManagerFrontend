import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SecondGroupStageGamesComponent } from './second-group-stage-games.component';

describe('SecondGroupStageGamesComponent', () => {
  let component: SecondGroupStageGamesComponent;
  let fixture: ComponentFixture<SecondGroupStageGamesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondGroupStageGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGroupStageGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
