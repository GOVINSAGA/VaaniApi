import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // ✅ FIX 1

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  loginForm!: FormGroup;  // ✅ FIX 2 (definite assignment)

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    // ✅ FIX 3 (initialize form here)
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

    this.api.login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/improve']);
    });
  }
}
