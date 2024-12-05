import { Injectable } from '@angular/core';
import {AngularFireAuth}from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private firestore: AngularFirestore,private router:Router) { }
  login(email: string, password: string): Promise<void> {
    return this.fireauth.signInWithEmailAndPassword(email, password) // Step 1: Authenticate user
      .then(res => {
        const userId = res.user?.uid; // Get userId (UID)
        if (!userId) {
          throw new Error('User ID not found');
        }

        // Step 2: Fetch user data from Firestore
        return firstValueFrom(this.firestore.collection('users').doc(userId).get());
      })
      .then(doc => {
        if (doc.exists) {
          const userData = doc.data() as { role: string; email: string };
          localStorage.setItem('role', userData?.role);  // Save role in localStorage
          localStorage.setItem('token', 'true');

          // Navigate based on role
          if (userData?.role === 'admin') {
            console.log('admin');
            this.router.navigate(['/admin-dashboard']);
          } else if (userData?.role === 'instructor') {
            this.router.navigate(['/instructor-dashboard']);
          } else {
            console.log('user');
            this.router.navigate(['/dashboard']);
          }
        } else {
          alert('No user data found!');
        }
      })
      .catch(err => {
        console.error('Error during login:', err); // Log the error
        alert(`Error: ${err.message}`);
        this.router.navigate(['/login']);
      });
  }


  //register method
  register(email: string, password: string, role: string = 'user'): Promise<void> {
    if (role === 'admin') {
      alert('already have admin');
      return Promise.reject('Cannot directly register as admin.');
    }
    return this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        const userId = res.user?.uid;
        if (!userId) {
          throw new Error('User ID not found');
        }
        return this.firestore.collection('users').doc(userId).set({
          email,
          role,
        });
      })
      .then(() => {
        alert('Registration successful');
        this.router.navigate(['login']);
      })
      .catch(err => {
        alert('Something went wrong: ' + err.message);
        this.router.navigate(['/register']);
        throw err; // Propagate the error to the caller
      });
  }
  //
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },
    err=>{
    alert(err.message);
    }
  )



  }
}
