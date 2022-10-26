import { TestBed } from '@angular/core/testing';

import { CartevisiteService } from './cartevisite.service';

describe('CartevisiteService', () => {
  let service: CartevisiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartevisiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
