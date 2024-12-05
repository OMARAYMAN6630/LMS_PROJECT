import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment-management',
  standalone: false,
  templateUrl: './enrollment-management.component.html',
  styleUrls: ['./enrollment-management.component.css']
})
export class EnrollmentManagementComponent {
  students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more student data here
  ];

  courses = [
    { id: 1, name: 'Angular Basics' },
    { id: 2, name: 'Advanced JavaScript' },
    // Add more courses here
  ];

  enrollments = [
    { studentName: 'John Doe', courseName: 'Angular Basics', status: 'Active' },
    { studentName: 'Jane Smith', courseName: 'Advanced JavaScript', status: 'Inactive' },
    // Add more enrollment data here
  ];

  selectedStudent: number | null = null;
  selectedCourse: number | null = null;

  assignStudent() {
    if (this.selectedStudent && this.selectedCourse) {
      // Find the selected student and course
      const student = this.students.find(s => s.id === this.selectedStudent);
      const course = this.courses.find(c => c.id === this.selectedCourse);

      // If both the student and course exist, add the enrollment
      if (student && course) {
        this.enrollments.push({
          studentName: student.name,
          courseName: course.name,
          status: 'Active' // You can adjust the default status if needed
        });

        // Reset the selections after assignment
        this.selectedStudent = null;
        this.selectedCourse = null;
      }
    }
  }

  toggleStatus(enrollment: any) {
    // Toggle between 'Active' and 'Inactive'
    enrollment.status = enrollment.status === 'Active' ? 'Inactive' : 'Active';
  }
}
