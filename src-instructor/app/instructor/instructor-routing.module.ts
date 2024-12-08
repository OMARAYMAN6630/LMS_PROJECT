// src/app/instructor/instructor-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreationComponent } from './components/course-creation/course-creation.component';
import { GradingComponent } from './components/grading/grading.component';
import { StudentMonitoringComponent } from './components/student-monitoring/student-monitoring.component';
const routes: Routes = [
  { path: 'course-creation', component: CourseCreationComponent },
  { path: 'grading', component: GradingComponent },
  { path: 'student-monitoring', component: StudentMonitoringComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
