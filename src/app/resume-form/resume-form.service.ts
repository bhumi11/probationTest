/**
 * @author: Bhumi Desai
 * @description: service for the http calls
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from './resume-form.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeFormService {

  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  /**
   * Adds resume data
   * @param resumeDetails : body of the post call
   * @returns resume observable of type Resume
   */
  public addResumeData(resumeDetails: Resume): Observable<Resume> {
    const url: string = this.baseUrl + 'Resume';
    return this.http.post<Resume>(url, resumeDetails);
  }

  /** This will get the record by id from database */
  public getResumeDataById(id: string): Observable<Resume> {
    const url = this.baseUrl + 'Resume/' + id;
    return this.http.get<Resume>(url);
  }
}
