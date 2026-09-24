import { TestBed } from '@angular/core/testing';

import { Cestaservice } from './cestaservice';

describe('Cestaservice', () => {
  let service: Cestaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cestaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
