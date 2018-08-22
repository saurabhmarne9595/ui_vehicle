import { TestBed, inject } from '@angular/core/testing';

import { InfluxService } from './influx.service';

describe('InfluxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfluxService]
    });
  });

  it('should be created', inject([InfluxService], (service: InfluxService) => {
    expect(service).toBeTruthy();
  }));
});
