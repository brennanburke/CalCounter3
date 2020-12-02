import { TestBed } from '@angular/core/testing';

import { FoodsearchService } from './foodsearch.service';

describe('FoodsearchService', () => {
  let service: FoodsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
