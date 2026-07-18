import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeUploadComponent } from './pages/resume-upload/resume-upload.component';
import { ResumeAnalysisComponent } from './pages/resume-analysis/resume-analysis.component';
import { InterviewSetupComponent } from './pages/interview-setup/interview-setup.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
     {
    path: '',
    component: HomeComponent
  },
  {
    path: 'upload',
    component: ResumeUploadComponent
  },
  {
    path: 'analysis',
    component: ResumeAnalysisComponent
  },
  {
    path: 'setup',
    component: InterviewSetupComponent
  },
  {
    path: 'interview',
    component: InterviewComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
];
