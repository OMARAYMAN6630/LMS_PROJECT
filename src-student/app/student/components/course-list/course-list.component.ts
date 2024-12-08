import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses = [
    {
      id: 1,
      name: 'Mathematics',
      description: 'Learn Algebra and Geometry',
      assessments: ['Quiz 1', 'Midterm Exam', 'Final Exam'],
      startDate: new Date(2024, 0, 15),
      endDate: new Date(2024, 5, 30)
    },
    {
      id: 2,
      name: 'Science',
      description: 'Explore Physics and Chemistry',
      assessments: ['Lab Report', 'Midterm Exam', 'Project Presentation'],
      startDate: new Date(2024, 1, 1),
      endDate: new Date(2024, 6, 20)
    },
    {
      id: 3,
      name: 'History',
      description: 'Dive into World History',
      assessments: ['Essay', 'Group Presentation', 'Final Exam'],
      startDate: new Date(2024, 2, 10),
      endDate: new Date(2024, 7, 15)
    }
  ];

  constructor(private router: Router) {}

  viewCourseDetails(courseId: number) {
    this.router.navigate(['/student/course-details', courseId]);
  }
}
