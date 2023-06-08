import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from 'src/app/shared-data.service';
@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss']
})
export class CustomerServiceComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.intiForm();
   
  }
  intiForm() {
    this.bookingForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }
  submitForm(): void {
    if (this.bookingForm.invalid) {
      return;
    }

    // Submit the form data to the backend or perform further actions
    console.log(this.bookingForm.value);

    // Pass the form data to the shared service
    this.sharedDataService.updateBookingData(this.bookingForm.value);

    // Reset the form
    this.bookingForm.reset();
  }

}
