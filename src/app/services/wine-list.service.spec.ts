import { TestBed } from '@angular/core/testing';

import { WineListService } from './wine-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WineListService', () => {
  let service: WineListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [WineListService,]
    });
    service = TestBed.inject(WineListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
