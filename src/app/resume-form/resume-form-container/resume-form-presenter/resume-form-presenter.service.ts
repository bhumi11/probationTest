/**
 * @author: Bhumi Desai
 * @description: service for business logic
 */
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resume } from '../../resume-form.model';
import { validateCharacters, validateOnlyNumber, validateNumberAndPercent, validateEmail } from './../../validator/form.validator';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ResumeFormPresenterService {

  constructor(private fb: FormBuilder, private datePipe: DatePipe) { }
  
  /**
   * Builds form
   * @returns formbuilder
   */
  public buildForm(): FormGroup {
    return this.fb.group({
        fname: ['', Validators.compose([Validators.required, validateCharacters])],
        lname: ['', Validators.compose([Validators.required, validateCharacters])],
        address: ['', [Validators.required]],
        birthdate: ['', [Validators.required]],
        emailId: ['', [Validators.required, validateEmail]],
        contactNo: ['', Validators.compose([Validators.required, validateOnlyNumber])],
        status: ['', [Validators.required]],
        hscPercent: ['', Validators.compose([Validators.required, validateNumberAndPercent])],
        sscPercent: ['', Validators.compose([Validators.required, validateNumberAndPercent])],
        bachelors: ['', [Validators.required]],
        year: ['', [Validators.required]],
        // skills: ['', [Validators.required]],
        experiance: ['', [Validators.required]],
    });
  }  
  /**
   * submits the details and returns
   * @param resumeDetailsFormGroup : parameter to return details
   * @returns resume details
   */
  public onSubmit(resumeDetailsFormGroup: FormGroup): Resume {
    let submitDetails: Resume = new Resume();
    submitDetails.birthdate = this.dateTransform(resumeDetailsFormGroup.value.birthdate);
    return submitDetails;
  }

  /**
   * Transforms the date
   * @param date: date to convert  
   */
    public dateTransform(date: Date): string {
      return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}
