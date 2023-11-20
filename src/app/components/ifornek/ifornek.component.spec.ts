import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfornekComponent } from './ifornek.component';

describe('IfornekComponent', () => {
  let component: IfornekComponent;
  let fixture: ComponentFixture<IfornekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfornekComponent]
    });
    fixture = TestBed.createComponent(IfornekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
