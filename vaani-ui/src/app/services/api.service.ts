import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://140.245.218.119:5000/api';

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  improve(data: any) {
    return this.http.post(`${this.baseUrl}/improve`, data);
  }

  getHistory() {
    return this.http.get(`${this.baseUrl}/improve/history`);
  }
}
