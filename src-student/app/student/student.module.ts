import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AssignmentSubmissionComponent } from './components/assignment-submission/assignment-submission.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    CourseListComponent,
    AssignmentSubmissionComponent,
    ProgressTrackerComponent,
    CourseDetailsComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports: [CourseDetailsComponent],
})
export class StudentModule {}
