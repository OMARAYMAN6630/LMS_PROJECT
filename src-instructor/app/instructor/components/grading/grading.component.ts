import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grading',
  standalone: false,
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
  title = 'Grade Student Assignment';
  courses: any[] = []; // Array to hold courses data
  assessments: any[] = []; // Array to hold assessments data
  students: any[] = []; // Array to hold students data

  constructor() {}

  // Simulating data fetch from a server or service
  ngOnInit(): void {
    this.fetchCourses();
    this.fetchAssessments();
    this.fetchStudents();
  }

  // Fetch courses (Simulated data fetch)
  fetchCourses(): void {
    this.courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' }
    ];
  }

  // Fetch assessments (Simulated data fetch)
  fetchAssessments(): void {
    this.assessments = [
      { id: 1, name: 'Assignment 1' },
      { id: 2, name: 'Assignment 2' },
      { id: 3, name: 'Assignment 3' }
    ];
  }

  // Fetch students (Simulated data fetch)
  fetchStudents(): void {
    this.students = [
      { id: 1, name: 'Student 1' },
      { id: 2, name: 'Student 2' },
      { id: 3, name: 'Student 3' }
    ];
  }

  // On Submit method to handle form submission
  onSubmit(gradingForm: any): void {
    if (gradingForm.valid) {
      const gradeData = {
        courseId: gradingForm.value.course,
        assessmentId: gradingForm.value.assessment,
        studentId: gradingForm.value.student,
        grade: gradingForm.value.grade
      };

      // Handle the grade data (e.g., send it to a server)
      console.log('Grading Data:', gradeData);
      alert('Grade successfully submitted!');
      gradingForm.reset();  // Reset form after submission
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
