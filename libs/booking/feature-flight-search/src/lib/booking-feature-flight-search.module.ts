import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FlightSearchComponent],
  exports: [FlightSearchComponent]
})
export class BookingFeatureFlightSearchModule {}
