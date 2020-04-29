import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@patterns-example/shared/data-access';
import { CheckInDataAccessModule } from '../../../../check-in/data-access/src';
import { CheckInFeatureShellModule } from '@patterns-example/check-in/check-in-feature-shell';

@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessModule,
    CheckInDataAccessModule,
    CheckInFeatureShellModule,
  ],
})
export class BookingDataAccessModule {}
