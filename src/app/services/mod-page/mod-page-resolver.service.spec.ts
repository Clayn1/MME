import { TestBed } from '@angular/core/testing';

import { ModPageResolverService } from './mod-page-resolver.service';

describe('ModPageResolverService', () => {
  let service: ModPageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModPageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
