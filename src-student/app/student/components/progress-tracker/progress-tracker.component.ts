import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-tracker',
  standalone: false,
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.css']
})
export class ProgressTrackerComponent {
  progress = [
    { course: 'Mathematics', completed: 80 },
    { course: 'Science', completed: 50 },
    { course: 'History', completed: 70 }
  ];

  incrementProgress(course: any) {
    if (course.completed < 100) {
      course.completed += 10;
    }
  }
}
