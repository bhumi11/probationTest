import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormPresentationComponent } from './resume-form-presentation.component';

describe('ResumeFormPresentationComponent', () => {
  let component: ResumeFormPresentationComponent;
  let fixture: ComponentFixture<ResumeFormPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
