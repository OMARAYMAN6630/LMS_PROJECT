import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../shared/course.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
constructor(private router:Router,private courseService:CourseService){}
course = { title: '', description: '' };
onSubmit(): void {
  if (!this.course.title || !this.course.description) {
    alert('Please fill in all fields.');
    return;
  }

  this.courseService.addCourse(this.course).then(() => {
    alert('Course added successfully!');
    this.router.navigate(['/coursemanagement']); // Redirect after adding
  }).catch((error) => {
    console.error('Error adding course:', error);
    alert('Failed to add course.');
  });
}
}
