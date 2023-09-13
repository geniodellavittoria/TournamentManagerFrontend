import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FinalGamesComponent } from './final-games.component';

describe('FinalGamesComponent', () => {
  let component: FinalGamesComponent;
  let fixture: ComponentFixture<FinalGamesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
