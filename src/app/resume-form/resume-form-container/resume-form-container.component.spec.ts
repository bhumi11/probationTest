import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormContainerComponent } from './resume-form-container.component';

describe('ResumeFormContainerComponent', () => {
  let component: ResumeFormContainerComponent;
  let fixture: ComponentFixture<ResumeFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
