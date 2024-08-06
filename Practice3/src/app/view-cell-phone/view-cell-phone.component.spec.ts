import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCellPhoneComponent } from './view-cell-phone.component';

describe('ViewCellPhoneComponent', () => {
  let component: ViewCellPhoneComponent;
  let fixture: ComponentFixture<ViewCellPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCellPhoneComponent]
    });
    fixture = TestBed.createComponent(ViewCellPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
