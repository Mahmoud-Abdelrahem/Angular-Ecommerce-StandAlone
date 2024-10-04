import { TestBed } from '@angular/core/testing';

import { CategoriesWithApiService } from './categories-with-api.service';

describe('CategoriesWithApiService', () => {
  let service: CategoriesWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
