import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  courses = [
    { id: 1, title: 'Introduction to Angular' },
    { id: 2, title: 'Advanced Angular Techniques' },
    { id: 3, title: 'Angular and RxJS' },
  ];
}
