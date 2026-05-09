import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-improve',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './improve.html'
})
export class ImproveComponent {
  improveForm: FormGroup;
  result: any;
  loading = false;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.improveForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3)]],
      tone: ['professional', Validators.required]
    });
  }


  improve() {
    if (this.improveForm.invalid) {
      this.improveForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.api.improve(this.improveForm.value).subscribe({
      next: (res) => {
        this.result = res;
        this.loading = false;
      },
      error: () => {
        alert('Something went wrong');
        this.loading = false;
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
