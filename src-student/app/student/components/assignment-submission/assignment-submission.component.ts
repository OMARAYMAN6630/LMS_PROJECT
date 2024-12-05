import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-submission',
  standalone: false,
  templateUrl: './assignment-submission.component.html',
  styleUrls: ['./assignment-submission.component.css'],
})
export class AssignmentSubmissionComponent {
  file: File | null = null;

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  submitAssignment() {
    if (this.file) {
      console.log(`Submitting: ${this.file.name}`);
      // Handle file upload logic here
    } else {
      alert('Please select a file first!');
    }
  }
}
