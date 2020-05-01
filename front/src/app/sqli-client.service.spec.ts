import { TestBed } from '@angular/core/testing';

import { SqliClientService } from './sqli-client.service';

describe('SqliClientService', () => {
  let service: SqliClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqliClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
