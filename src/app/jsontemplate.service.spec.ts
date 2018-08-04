import { TestBed, inject } from '@angular/core/testing';

import { JsontemplateService } from './jsontemplate.service';

describe('JsontemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsontemplateService]
    });
  });

  it('should be created', inject([JsontemplateService], (service: JsontemplateService) => {
    expect(service).toBeTruthy();
  }));
});
