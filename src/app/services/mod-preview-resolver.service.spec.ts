import {TestBed} from '@angular/core/testing';

import {ModPreviewResolverService} from './mod-preview-resolver.service';

describe('ModPreviewResolverService', () => {
  let service: ModPreviewResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModPreviewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
