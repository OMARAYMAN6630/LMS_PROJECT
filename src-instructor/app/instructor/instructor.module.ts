import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { InstructorRoutingModule } from './instructor-routing.module';

import { CourseCreationComponent } from './components/course-creation/course-creation.component';
import { GradingComponent } from './components/grading/grading.component';
import { StudentMonitoringComponent } from './components/student-monitoring/student-monitoring.component';

@NgModule({
  declarations: [
    CourseCreationComponent,
    GradingComponent,
    StudentMonitoringComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    InstructorRoutingModule
  ]
})
export class InstructorModule {}
