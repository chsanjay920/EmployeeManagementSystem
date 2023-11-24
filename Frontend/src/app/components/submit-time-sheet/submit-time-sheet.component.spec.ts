import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTimeSheetComponent } from './submit-time-sheet.component';

describe('SubmitTimeSheetComponent', () => {
  let component: SubmitTimeSheetComponent;
  let fixture: ComponentFixture<SubmitTimeSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitTimeSheetComponent]
    });
    fixture = TestBed.createComponent(SubmitTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
