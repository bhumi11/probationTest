/**
 * @author: Bhumi Desai
 * @description: resume form container for service calls and pass data to presentation
 */
import { Component, OnInit } from '@angular/core';
import { ResumeFormService } from '../resume-form.service';
import { Resume } from '../resume-form.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resume-form-container',
  templateUrl: './resume-form-container.component.html',
  styleUrls: ['./resume-form-container.component.scss']
})
export class ResumeFormContainerComponent implements OnInit {

  constructor(private resumeFormService: ResumeFormService, private toasterService: ToastrService) { }

  ngOnInit() {
  }
  
  /**
   * Subscribes the data to insert the record.
   * @param resumeDetails : to pass as a parameter 
   */
  public resumeSubmit(resumeDetails: Resume): void {
    this.resumeFormService.addResumeData(resumeDetails).
      subscribe((response: Resume) => {
        console.log("successfully added");
        this.toasterService.success('Record added successfully.');
      },
      (err: any) => {
        this.toasterService.error('error');
        });
  }
}
