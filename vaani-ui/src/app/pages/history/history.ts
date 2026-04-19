import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router, RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './history.html'
})
export class HistoryComponent implements OnInit {
  history: any[] = [];
  loading = false;

  constructor(private api: ApiService,private router: Router) { }

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory() {
    this.loading = true;

    this.api.getHistory().subscribe({
      next: (res: any) => {
        this.history = res;
        this.loading = false;
      },
      error: () => {
        alert('Failed to load history');
        this.loading = false;
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
