import { Component } from '@angular/core';

@Component({
  selector: 'app-course-creation',
  standalone: false,
  templateUrl: './course-creation.component.html',
  styleUrls: ['./course-creation.component.css']
})
export class CourseCreationComponent {
  title = 'Course Creation';
  assessments: string[] = []; // List to store assessments
  materials: string[] = []; // List to store materials
  newAssessment: string = ''; // Model for assessment input
  newMaterial: string = ''; // Model for material input
  courseOptions: string[] = ["Course 1", "Course 2", "Course 3"]; // Example course options

  // Add new assessment
  addAssessment(): void {
    if (this.isValidInput(this.newAssessment)) {
      this.assessments.push(this.newAssessment.trim());
      this.newAssessment = ''; // Clear input field
    }
  }

  // Remove assessment by index
  removeAssessment(index: number): void {
    this.assessments.splice(index, 1);
  }

  // Add new material
  addMaterial(): void {
    if (this.isValidInput(this.newMaterial)) {
      this.materials.push(this.newMaterial.trim());
      this.newMaterial = ''; // Clear input field
    }
  }

  // Remove material by index
  removeMaterial(index: number): void {
    this.materials.splice(index, 1);
  }

  // Form submission handler
  onSubmit(courseForm: any): void {
    if (courseForm.valid || this.isFormPartialValid()) {
      // Push new course data into lists (assessments and materials)
      const newCourseName = courseForm.value.name;

      // Assuming we want to store the course name and its assessments and materials
      const courseData = {
        courseName: newCourseName,
        assessments: this.assessments,
        materials: this.materials,
      };

      // Add the new course data to a list or handle it as necessary
      console.log('New Course Added:', courseData);

      // After adding course data, you can reset inputs or maintain the list for next use
      console.log(this.assessments);
      this.resetForm(courseForm);
      alert('Course successfully created!');
    } else {
      alert('Please fill out all required fields.');
    }
  }

  // Helper: Validate input length
  private isValidInput(input: string): boolean {
    return input.trim().length >= 3;
  }

  // Check if the form is partially valid (when assessments or materials are empty)
  private isFormPartialValid(): boolean {
    return this.assessments.length > 0 || this.materials.length > 0;
  }

  // Reset form and component state
  private resetForm(courseForm: any): void {
    courseForm.reset();
    this.assessments = [];  // Clear the assessments array if needed
    this.materials = [];    // Clear the materials array if needed
  }
}
