// src/app/student/components/course-list/course-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  standalone:false,
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses = [
    { name: 'Course 1', description: 'Description of Course 1' },
    { name: 'Course 2', description: 'Description of Course 2' },
    { name: 'Course 3', description: 'Description of Course 3' }
  ];
}
