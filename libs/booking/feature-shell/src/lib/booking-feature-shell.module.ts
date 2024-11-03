import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookingDataAccessModule } from '@patterns-example/booking/data-access';
import {
  BookingFeatureFlightSearchModule,
  FlightSearchComponent,
} from '@patterns-example/booking/feature-flight-search';

@NgModule({
  imports: [
    CommonModule,
    BookingFeatureFlightSearchModule,
    BookingDataAccessModule,

    RouterModule.forChild([
      {
        path: '',
        component: FlightSearchComponent,
        pathMatch: 'full',
      },
      {
        path: 'booking-feature-passenger-info',
        loadChildren: () =>
          import('@patterns-example/booking/feature-passenger-info').then(
            (module) => module.BookingFeaturePassengerInfoModule
          ),
      },
      {
        path: 'shared-seatmap-feature-seat-listing',
        loadChildren: () =>
          import('@patterns-example/shared/seatmap/feature-seat-listing').then(
            (module) => module.SharedSeatmapFeatureSeatListingModule
          ),
      },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class BookingFeatureShellModule {}
