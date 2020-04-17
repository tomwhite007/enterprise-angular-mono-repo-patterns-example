import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'shared-seatmap-feature-seatmap',
        loadChildren: () =>
          import('@patterns-example/shared/seatmap/feature-seatmap').then(
            module => module.SharedSeatmapFeatureSeatmapModule
          )
      }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class CheckInFeatureShellModule {}
