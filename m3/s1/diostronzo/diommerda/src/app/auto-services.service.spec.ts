import { TestBed } from '@angular/core/testing';

import { AutoServicesService } from './auto-services.service';

describe('AutoServicesService', () => {
  let service: AutoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
