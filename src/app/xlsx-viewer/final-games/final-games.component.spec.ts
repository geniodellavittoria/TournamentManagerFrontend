import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalGamesComponent } from './final-games.component';

describe('FinalGamesComponent', () => {
  let component: FinalGamesComponent;
  let fixture: ComponentFixture<FinalGamesComponent>;

  beforeEach(async(() => {
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
