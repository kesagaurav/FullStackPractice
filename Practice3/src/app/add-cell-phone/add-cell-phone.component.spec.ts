import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCellPhoneComponent } from './add-cell-phone.component';

describe('AddCellPhoneComponent', () => {
  let component: AddCellPhoneComponent;
  let fixture: ComponentFixture<AddCellPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCellPhoneComponent]
    });
    fixture = TestBed.createComponent(AddCellPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
