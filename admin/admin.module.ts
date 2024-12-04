import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { EnrollmentManagementComponent } from './components/enrollment-management/enrollment-management.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    UserManagementComponent,
    CourseManagementComponent,
    EnrollmentManagementComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
