import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'; 
import { ResumeUploadResponse } from '../models/resume-upload-response';
import { ResumeAnalysisResponse } from '../models/resume-analysis-response';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private http = inject(HttpClient);

  uploadResume(file: File) {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post<ResumeUploadResponse>(
      `${environment.apiUrl}/resume/upload`,
      formData
    );
  }

  analyzeResume() {
  return this.http.post<ResumeAnalysisResponse>(
    `${environment.apiUrl}/resume/analyze`,
    {}
  );
}

}