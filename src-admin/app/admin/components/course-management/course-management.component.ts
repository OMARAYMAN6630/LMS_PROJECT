import { Component } from '@angular/core';

@Component({
  selector: 'app-course-management',
  standalone: false,
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent {
  // Sample course data
  courses = [
    { id: 1, name: 'Angular Basics', description: 'Learn the basics of Angular', duration: '4 weeks', status: 'Inactive' },
    { id: 2, name: 'Advanced JavaScript', description: 'Deep dive into JavaScript', duration: '6 weeks', status: 'Active' },
    // More courses can be added here
  ];

  // New course data model
  newCourse = {
    name: '',
    description: '',
    duration: ''
  };

  // Method to add a new course
  addCourse() {
    if (this.newCourse.name && this.newCourse.description && this.newCourse.duration) {
      this.courses.push({
        id: this.courses.length + 1, // Assuming ID is auto-incremented
        ...this.newCourse,
        status: 'Inactive' // New course is initially inactive
      });
      this.newCourse = { name: '', description: '', duration: '' }; // Reset the form
    }
  }

  // Method to toggle the course status (activate/inactivate)
  toggleCourseStatus(course: any) {
    course.status = course.status === 'Active' ? 'Inactive' : 'Active';
  }
}
