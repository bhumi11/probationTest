import { TestBed } from '@angular/core/testing';

import { ResumeFormPresenterService } from './resume-form-presenter.service';

describe('ResumeFormPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeFormPresenterService = TestBed.get(ResumeFormPresenterService);
    expect(service).toBeTruthy();
  });
});
