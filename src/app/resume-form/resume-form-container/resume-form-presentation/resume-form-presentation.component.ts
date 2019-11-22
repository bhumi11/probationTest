/**
 * @author: Bhumi Desai
 * @description: presentation component for the ui
 */
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ResumeFormPresenterService } from '../resume-form-presenter/resume-form-presenter.service';
import { FormGroup } from '@angular/forms';
import { Resume } from '../../resume-form.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resume-form-ui',
  templateUrl: './resume-form-presentation.component.html',
  styleUrls: ['./resume-form-presentation.component.scss'],
  viewProviders: [ResumeFormPresenterService],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeFormPresentationComponent implements OnInit {

   /** formgroup for reactive form */
   public resumeDetailsFormGroup: FormGroup;
   public isFormSubmitted: boolean;
   /** Output of ResumeFormPresentationComponent */
  @Output() public resumeDetails: EventEmitter<Resume>;
  
  constructor(private resumeFormPresenterService: ResumeFormPresenterService,
    private cdr: ChangeDetectorRef, private toasterService: ToastrService) {
    this.initProperty();
  }

  ngOnInit() {
  }
  
  /**
   * calls the method from presenter service and emits the output
   */
  public onSubmit(): void {
    this.isFormSubmitted = true;
    this.cdr.detectChanges();
    if(this.resumeDetailsFormGroup.valid){
      const submit: Resume = this.resumeFormPresenterService.onSubmit(this.resumeDetailsFormGroup);
      this.resumeDetails.emit(submit);
    } else {
      this.toasterService.error("error");
      return;
    }
  }

  /** Gets all the form controls. */
  public get formControls () {
    return this.resumeDetailsFormGroup.controls;
  }
  
  /**
   * Inits property
   */
  private initProperty(): void {
    this.resumeDetails = new EventEmitter();
    this.resumeDetailsFormGroup = this.resumeFormPresenterService.buildForm();
  }

}
