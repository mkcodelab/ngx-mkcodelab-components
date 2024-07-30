import { TestBed } from '@angular/core/testing';

import { NgxMkcodelabComponentsService } from './ngx-mkcodelab-components.service';

describe('NgxMkcodelabComponentsService', () => {
  let service: NgxMkcodelabComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMkcodelabComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
