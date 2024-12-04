import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogolevelcardComponent } from './logolevelcard.component';

describe('LogolevelcardComponent', () => {
  let component: LogolevelcardComponent;
  let fixture: ComponentFixture<LogolevelcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogolevelcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogolevelcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
