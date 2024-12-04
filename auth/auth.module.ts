// src/app/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for reactive forms
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  // Add FormsModule to the imports array
    ReactiveFormsModule,  // You can keep this if you're using reactive forms
    AuthRoutingModule
  ]
})
export class AuthModule { }
