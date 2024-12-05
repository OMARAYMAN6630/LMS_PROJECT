import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses = [
    { id: '1', title: 'Angular Basics', description: 'Learn the basics of Angular framework.', instructor: 'John Doe', modules: ['Introduction', 'Components', 'Services', 'Routing'] },
    { id: '2', title: 'Advanced Angular', description: 'Deep dive into advanced Angular topics.', instructor: 'Jane Smith', modules: ['RxJS', 'Advanced Forms', 'Performance Tuning'] },
  ];

  getCourses() {
    return this.courses;
  }

  getCourseById(id: string) {
    return this.courses.find(course => course.id === id);
  }
}
