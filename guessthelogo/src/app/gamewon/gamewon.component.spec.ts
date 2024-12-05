import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamewonComponent } from './gamewon.component';

describe('GamewonComponent', () => {
  let component: GamewonComponent;
  let fixture: ComponentFixture<GamewonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamewonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamewonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
