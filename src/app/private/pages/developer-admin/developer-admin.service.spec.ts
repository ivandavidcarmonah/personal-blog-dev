import { TestBed } from '@angular/core/testing';

import { DeveloperAdminService } from './developer-admin.service';

describe('DeveloperAdminService', () => {
  let service: DeveloperAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
