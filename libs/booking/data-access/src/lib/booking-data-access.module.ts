import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@patterns-example/shared/data-access';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule]
})
export class BookingDataAccessModule {}
