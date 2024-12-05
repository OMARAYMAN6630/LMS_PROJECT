import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AssignmentSubmissionComponent } from './components/assignment-submission/assignment-submission.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'assignments', component: AssignmentSubmissionComponent },
  { path: 'progress', component: ProgressTrackerComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
