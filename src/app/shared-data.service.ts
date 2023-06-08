import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private bookingDataSubject = new Subject<any>();
  bookingData$ = this.bookingDataSubject.asObservable();

  updateBookingData(bookingData: any): void {
    this.bookingDataSubject.next(bookingData);
  }
}
