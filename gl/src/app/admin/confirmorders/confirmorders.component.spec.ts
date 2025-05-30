import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmordersComponent } from './confirmorders.component';

describe('ConfirmordersComponent', () => {
  let component: ConfirmordersComponent;
  let fixture: ComponentFixture<ConfirmordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmordersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
