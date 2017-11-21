import { TestBed, inject } from '@angular/core/testing';

import { CrewdataService } from './crewdata.service';

describe('CrewdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewdataService]
    });
  });

  it('should be created', inject([CrewdataService], (service: CrewdataService) => {
    expect(service).toBeTruthy();
  }));
});
