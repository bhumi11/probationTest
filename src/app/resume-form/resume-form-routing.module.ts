/**
 * @author: Bhumi Desai
 * @description: routing module for the resume form container
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeFormContainerComponent } from './resume-form-container/resume-form-container.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeFormContainerRoutingModule { }
