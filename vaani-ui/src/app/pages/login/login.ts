import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage: string = '';  // ✅ FIX 1: Added error message variable

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // Clear previous errors when they click login again
    this.errorMessage = '';

    // ✅ FIX 2: Handle both 'next' (success) and 'error' (failure)
    this.api.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);

        // ✅ FIX 3: Add { replaceUrl: true } to fix the Back Button trap
        this.router.navigate(['/improve'], { replaceUrl: true });
      },
      error: (err) => {
        // ✅ FIX 4: Catch the 401 error and show it to the user
        if (err.status === 401) {
          this.errorMessage = 'Incorrect email or password. Please try again.';
        } else {
          this.errorMessage = 'An unexpected error occurred.';
        }
      }
    });
  }
}
