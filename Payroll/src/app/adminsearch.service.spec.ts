import { TestBed } from '@angular/core/testing';

import { AdminsearchService } from './adminsearch.service';

describe('AdminsearchService', () => {
  let service: AdminsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
