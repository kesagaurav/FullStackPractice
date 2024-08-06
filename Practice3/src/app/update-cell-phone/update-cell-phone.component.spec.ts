import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCellPhoneComponent } from './update-cell-phone.component';

describe('UpdateCellPhoneComponent', () => {
  let component: UpdateCellPhoneComponent;
  let fixture: ComponentFixture<UpdateCellPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCellPhoneComponent]
    });
    fixture = TestBed.createComponent(UpdateCellPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
