import { TestBed } from '@angular/core/testing';

import { ResumeFormService } from './resume-form.service';

describe('ResumeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeFormService = TestBed.get(ResumeFormService);
    expect(service).toBeTruthy();
  });
});
