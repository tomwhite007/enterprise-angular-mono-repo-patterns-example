import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSeatmapDataAccessModule } from '@patterns-example/shared/seatmap/data-access';

@NgModule({
  imports: [CommonModule, SharedSeatmapDataAccessModule]
})
export class SharedSeatmapFeatureSeatmapModule {}
