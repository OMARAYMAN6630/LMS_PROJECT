import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any;

  courses = [
    {
      id: 1,
      name: 'Mathematics',
      description: 'Learn Algebra and Geometry',
      assessments: ['Quiz 1', 'Midterm Exam', 'Final Exam'],
      startDate: new Date(2024, 0, 15),
      endDate: new Date(2024, 5, 30),
      materials: [
        { name: 'Algebra Textbook', type: 'PDF', link: 'https://example.com/algebra-textbook.pdf' },
        { name: 'Geometry Notes', type: 'Word', link: 'https://example.com/geometry-notes.docx' }
      ]
    },
    {
      id: 2,
      name: 'Science',
      description: 'Explore Physics and Chemistry',
      assessments: ['Lab Report', 'Midterm Exam', 'Project Presentation'],
      startDate: new Date(2024, 1, 1),
      endDate: new Date(2024, 6, 20),
      materials: [
        { name: 'Physics Lecture Slides', type: 'PPT', link: 'https://example.com/physics-slides.ppt' },
        { name: 'Chemistry Experiment Guide', type: 'PDF', link: 'https://example.com/chemistry-guide.pdf' }
      ]
    },
    {
      id: 3,
      name: 'History',
      description: 'Dive into World History',
      assessments: ['Essay', 'Group Presentation', 'Final Exam'],
      startDate: new Date(2024, 2, 10),
      endDate: new Date(2024, 7, 15),
      materials: [
        { name: 'World History Overview', type: 'PDF', link: 'https://example.com/world-history.pdf' },
        { name: 'Group Project Guidelines', type: 'Word', link: 'https://example.com/project-guidelines.docx' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.course = this.courses.find((course) => course.id === courseId);
  }
}
