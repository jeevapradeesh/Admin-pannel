// review.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './pages/dashboard/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'https://your-api-url/reviews'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  addReview(review: Review): Observable<any> {
    return this.http.post(this.apiUrl, review);
  }
}
