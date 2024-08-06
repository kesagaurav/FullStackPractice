import { TestBed } from '@angular/core/testing';

import { CellPhoneService } from './cell-phone.service';

describe('CellPhoneService', () => {
  let service: CellPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
