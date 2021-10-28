import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@patterns-example/shared/data-access';
import { CheckInDataAccessModule } from '../../../../check-in/data-access/src';
import { CheckInFeatureShellModule } from '@patterns-example/check-in/feature-shell';

@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessModule,
    CheckInFeatureShellModule,
    CheckInDataAccessModule,
  ],
})
export class BookingDataAccessModule {}
