import { TestBed } from '@angular/core/testing';

import { DemoRestAPIService } from './demo-rest-api.service';

describe('DemoRestAPIService', () => {
  let service: DemoRestAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoRestAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
