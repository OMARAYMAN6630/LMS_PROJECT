import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  role: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Registering user:', this.role, this.email, this.password);
    // You can add more logic here to register the user
  }
}