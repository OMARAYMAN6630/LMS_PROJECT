import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-submission',
  standalone: false,
  templateUrl: './assignment-submission.component.html',
  styleUrls: ['./assignment-submission.component.css']
})
export class AssignmentSubmissionComponent {
  // Available courses and assignment types
  courses = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'History' }
  ];

  assignmentTypes = [
    { id: 1, name: 'Quiz' },
    { id: 2, name: 'Midterm Exam' },
    { id: 3, name: 'Final Exam' },
    { id: 4, name: 'Project' },
    { id: 5, name: 'Lab Report' }
  ];

  // The assignment model that includes course selection and assignment type
  assignment = {
    courseId: null,
    assignmentTypeId: null,
    description: '',
    submitted: false,
    date: null as Date | null
  };

  // Handle form submission
  submitAssignment() {
    if (this.assignment.courseId && this.assignment.assignmentTypeId && this.assignment.description) {
      this.assignment.submitted = true;
      this.assignment.date = new Date();
      console.log('Assignment submitted:', this.assignment);
    } else {
      alert('Please fill in all fields!');
    }
  }

  // Reset form to initial state
  resetForm() {
    this.assignment = { courseId: null, assignmentTypeId: null, description: '', submitted: false, date: null };
  }
}
