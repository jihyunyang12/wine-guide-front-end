import { TestBed } from '@angular/core/testing';

import { WineListService } from './wine-list.service';

describe('WineListService', () => {
  let service: WineListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
