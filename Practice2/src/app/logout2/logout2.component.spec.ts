import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logout2Component } from './logout2.component';

describe('Logout2Component', () => {
  let component: Logout2Component;
  let fixture: ComponentFixture<Logout2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Logout2Component]
    });
    fixture = TestBed.createComponent(Logout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
