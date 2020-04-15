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
      }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class BookingFeatureShellModule {}
