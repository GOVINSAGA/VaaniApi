import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html'
})
export class RegisterComponent {

  form!: FormGroup;  // ✅ FIX 1
  loading = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    // ✅ FIX 2 (initialize inside constructor)
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log(this.form.value);
      return;
    }

    this.loading = true;

    this.api.register(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        alert('Registered successfully');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        alert('Registration failed');
        console.error(err);
      }
    });
  }
}
