import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'booking-feature-flight-search',
        loadChildren: () =>
          import('@patterns-example/booking/feature-flight-search').then(
            module => module.BookingFeatureFlightSearchModule
          )
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
