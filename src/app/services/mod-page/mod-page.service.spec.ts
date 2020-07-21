import { TestBed } from '@angular/core/testing';

import { ModPageService } from './mod-page.service';

describe('ModPageService', () => {
  let service: ModPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
