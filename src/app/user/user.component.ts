import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  bookingData: any[] = [];
  private subscription: Subscription;

  constructor(private sharedDataService: SharedDataService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    const storedData = localStorage.getItem('bookingData');
    if (storedData) {
      this.bookingData = JSON.parse(storedData);
    }

    this.subscription = this.sharedDataService.bookingData$.subscribe(data => {
      this.bookingData.push(data);
      this.saveDataToLocalStorage();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteBooking(index: number): void {
    this.bookingData.splice(index, 1);
    this.saveDataToLocalStorage();
  }

  saveDataToLocalStorage(): void {
    localStorage.setItem('bookingData', JSON.stringify(this.bookingData));
  }
}
