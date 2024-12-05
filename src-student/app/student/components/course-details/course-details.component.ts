import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  courseId: number | null = null;
  courseDetails: any;

  allCourses = [
    { id: 1, title: 'Introduction to Angular', description: 'Learn the basics of Angular...', instructor: 'John Doe', duration: '10 hours' },
    { id: 2, title: 'Advanced Angular Techniques', description: 'Deep dive into Angular...', instructor: 'Jane Smith', duration: '15 hours' },
    { id: 3, title: 'Angular and RxJS', description: 'Master Angular with RxJS...', instructor: 'Emily Johnson', duration: '12 hours' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseId = Number(params.get('id'));
      this.courseDetails = this.allCourses.find(course => course.id === this.courseId);
    });
  }
}
