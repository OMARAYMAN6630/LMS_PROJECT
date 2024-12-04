// src/app/student/components/progress-tracker/progress-tracker.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-tracker',
  standalone:false,
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.css']
})
export class ProgressTrackerComponent {
  progress = [
    { course: 'Course 1', completed: 50 },
    { course: 'Course 2', completed: 75 },
    { course: 'Course 3', completed: 30 }
  ];
}
