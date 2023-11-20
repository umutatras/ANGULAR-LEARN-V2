import { TestBed } from '@angular/core/testing';

import { GenerichttpserviceService } from './generichttpservice.service';

describe('GenerichttpserviceService', () => {
  let service: GenerichttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerichttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
