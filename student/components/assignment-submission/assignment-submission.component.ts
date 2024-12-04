// src/app/student/components/assignment-submission/assignment-submission.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-submission',
  standalone:false,
  templateUrl: './assignment-submission.component.html',
  styleUrls: ['./assignment-submission.component.css']
})
export class AssignmentSubmissionComponent {
  assignment = { name: 'Assignment 1', description: 'This is your first assignment.' };

  onSubmit() {
    alert('Assignment submitted!');
  }
}
