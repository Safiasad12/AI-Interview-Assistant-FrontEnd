import { Component, inject, OnInit } from '@angular/core';
import { ResumeAnalysisResponse } from '../../models/resume-analysis-response';
import { ResumeService } from '../../services/resume.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-resume-analysis',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './resume-analysis.component.html',
  styleUrl: './resume-analysis.component.scss'
})
export class ResumeAnalysisComponent implements OnInit {

  private resumeService = inject(ResumeService);

  analysis?: ResumeAnalysisResponse;

  loading = true;

  ngOnInit(): void {

    this.resumeService.analyzeResume().subscribe({

      next: (response) => {

        this.analysis = response;

      },

      error: (err) => {

        console.error(err);

      },

      complete: () => {

        this.loading = false;

      }

    });

  }

}
