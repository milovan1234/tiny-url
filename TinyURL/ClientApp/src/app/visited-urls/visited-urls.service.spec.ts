import { TestBed } from '@angular/core/testing';

import { VisitedUrlsService } from './visited-urls.service';

describe('VisitedUrlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitedUrlsService = TestBed.get(VisitedUrlsService);
    expect(service).toBeTruthy();
  });
});
