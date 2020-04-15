import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BookingFeatureFlightSearchModule,
  FlightSearchComponent
} from '@patterns-example/booking/feature-flight-search';

@NgModule({
  imports: [
    CommonModule,
    BookingFeatureFlightSearchModule,

    RouterModule.forChild([
      {
        path: '',
        component: FlightSearchComponent,
        pathMatch: 'full'
      },
      {
        path: 'booking-feature-passenger-info',
        loadChildren: () =>
          import('@patterns-example/booking/feature-passenger-info').then(
            module => module.BookingFeaturePassengerInfoModule
          )
      },
      {
        path: 'shared-seatmap-feature-seat-listing',
        loadChildren: () =>
          import('@patterns-example/shared/seatmap/feature-seat-listing').then(
            module => module.SharedSeatmapFeatureSeatListingModule
          )
      }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class BookingFeatureShellModule {}
