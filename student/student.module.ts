// src/app/student/student.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module'; // Import the routing module
import { CourseListComponent } from './components/course-list/course-list.component'; // Import components
import { AssignmentSubmissionComponent } from './components/assignment-submission/assignment-submission.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';

@NgModule({
  declarations: [
    CourseListComponent,
    AssignmentSubmissionComponent,
    ProgressTrackerComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule // Import routing module for student-specific routes
  ]
})
export class StudentModule { }
