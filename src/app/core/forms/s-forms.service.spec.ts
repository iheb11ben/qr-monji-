import { TestBed } from '@angular/core/testing';

import { SFormsService } from './s-forms.service';

describe('SFormsService', () => {
  let service: SFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
