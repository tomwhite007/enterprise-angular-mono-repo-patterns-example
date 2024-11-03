import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedSeatmapDataAccessModule } from '@patterns-example/shared/seatmap/data-access';

@NgModule({
  imports: [
    CommonModule,
    SharedSeatmapDataAccessModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class SharedSeatmapFeatureSeatListingModule {}
