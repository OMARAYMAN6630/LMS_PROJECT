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
  newAssessment: string = ''; // Bind the assessment input field
  newMaterial: string = ''; // Bind the material input field
  assessmentFiles: File[] = []; // To hold selected files for assessment

  // Add new assessment to the list
  addAssessment() {
    if (this.newAssessment.trim().length >= 3) {
      this.assessments.push(this.newAssessment);
      this.newAssessment = ''; // Clear input field
    }
  }

  // Remove an assessment by index
  removeAssessment(index: number) {
    this.assessments.splice(index, 1);
  }

  // Add new material to the list
  addMaterial() {
    if (this.newMaterial.trim().length >= 3) {
      this.materials.push(this.newMaterial);
      this.newMaterial = ''; // Clear input field
    }
  }

  // Remove a material by index
  removeMaterial(index: number) {
    this.materials.splice(index, 1);
  }

  // Handle file change and store the selected files
  onFileChange(event: any): void {
    const files = event.target.files;
    if (files.length > 0) {
      this.assessmentFiles = Array.from(files); // Store files in the array
    }
  }

  // Handle form submission
  onSubmit(courseForm: any): void {
    if (courseForm.valid) {
      if (this.assessmentFiles.length === 0) {
        alert('Please upload at least one assessment file.');
        return;
      }

      // Handle the form data and uploaded files here
      const formData = new FormData();
      formData.append('courseName', courseForm.value.name);
      formData.append('description', courseForm.value.description);
      formData.append('startDate', courseForm.value.startDate);
      formData.append('endDate', courseForm.value.endDate);

      // Append all assessment files to FormData
      this.assessmentFiles.forEach((file, index) => {
        formData.append('assessmentFiles[]', file, file.name);
      });

      // Append the assessments and materials to the form data
      this.assessments.forEach((assessment, index) => {
        formData.append('assessments[]', assessment);
      });

      this.materials.forEach((material, index) => {
        formData.append('materials[]', material);
      });

      // Send the data to the server or handle it accordingly
      console.log('Course Data:', formData);
      alert('Course successfully created!');
      courseForm.reset();
      this.assessmentFiles = []; // Reset the file array
      this.assessments = []; // Clear assessments list
      this.materials = []; // Clear materials list
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
