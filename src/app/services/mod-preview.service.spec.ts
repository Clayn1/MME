import {TestBed} from '@angular/core/testing';

import {ModPreviewService} from './mod-preview.service';

describe('ModPreviewService', () => {
  let service: ModPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
