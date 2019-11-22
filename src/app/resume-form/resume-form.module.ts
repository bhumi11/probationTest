/**
 * @author: Bhumi Desai
 * @description: module file for the imports and declarations
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';

import { ResumeFormContainerRoutingModule } from './resume-form-routing.module';
import { ResumeFormContainerComponent } from './resume-form-container/resume-form-container.component';
import { ResumeFormPresentationComponent } from './resume-form-container/resume-form-presentation/resume-form-presentation.component';


@NgModule({
  declarations: [ResumeFormContainerComponent, ResumeFormPresentationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    ResumeFormContainerRoutingModule
  ],
  providers: [DatePipe]
})
export class ResumeFormModule { }
