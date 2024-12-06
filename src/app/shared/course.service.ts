import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { FieldValue, arrayUnion, arrayRemove } from 'firebase/firestore'
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private collectionName = 'courses';
  constructor(private firestore: AngularFirestore) {}

  // Get all courses
  getCourses(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }
  getCourseById(courseId: string): Observable<any> {
    return this.firestore.collection('courses').doc(courseId).valueChanges();
  }
  // Add a new course
  addCourse(course: any): Promise<void> {
    const id = this.firestore.createId(); // Generate a unique ID
    return this.firestore.collection(this.collectionName).doc(id).set({
      ...course,
      id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isArchived: false,
    });
  }

  // Update course details
  updateCourse(courseId: string, updatedData: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(courseId).update({
      ...updatedData,
      updatedAt: new Date().toISOString(),
    });
  }

  // Archive a course
  archiveCourse(course: { id: string; isArchived: boolean }): Promise<void> {
    const courseDoc = this.firestore.collection(this.collectionName).doc(course.id);

    // Toggle the current isArchived state
    const updatedStatus = !course.isArchived;

    return courseDoc.update({
      isArchived: updatedStatus,
      updatedAt: new Date().toISOString(),
    });
  }



  // Delete a course
  deleteCourse(courseId: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(courseId).delete();
  }
}
