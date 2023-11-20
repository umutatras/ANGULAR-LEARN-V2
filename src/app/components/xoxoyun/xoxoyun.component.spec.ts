import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoxoyunComponent } from './xoxoyun.component';

describe('XoxoyunComponent', () => {
  let component: XoxoyunComponent;
  let fixture: ComponentFixture<XoxoyunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XoxoyunComponent]
    });
    fixture = TestBed.createComponent(XoxoyunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
