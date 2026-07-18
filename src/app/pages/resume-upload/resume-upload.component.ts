import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ResumeService } from '../../services/resume.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { inject } from '@angular/core';

@Component({
  selector: 'app-resume-upload',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './resume-upload.component.html',
  styleUrl: './resume-upload.component.scss'
})
export class ResumeUploadComponent {

  private resumeService = inject(ResumeService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  selectedFile: File | null = null;
  isUploading : boolean = false;

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }

  }

  uploadResume(): void {

  if (!this.selectedFile) {
    return;
  }

  this.isUploading = true;

  this.resumeService.uploadResume(this.selectedFile).subscribe({

    next: (response) => {

      console.log(response);

      this.snackBar.open(
        'Resume uploaded successfully!',
        'Close',
        {
          duration: 3000
        }
      );

      this.router.navigate(['/analysis']);

    },

    error: (error) => {

      console.error(error);

      this.snackBar.open(
        'Failed to upload resume.',
        'Close',
        {
          duration: 3000
        }
      );

      this.isUploading = false;

    },

    complete: () => {

      this.isUploading = false;

    }

  });

}

}