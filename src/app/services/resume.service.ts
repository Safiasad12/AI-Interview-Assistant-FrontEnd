import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private http = inject(HttpClient);

  uploadResume(file: File) {

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(
      `${environment.apiUrl}/resume/upload`,
      formData
    );
  }

}