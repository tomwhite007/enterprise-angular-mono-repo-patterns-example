import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@patterns-example/booking/feature-shell').then(
              module => module.BookingFeatureShellModule
            )
        }
      ],
      { initialNavigation: 'enabled', preloadingStrategy: PreloadAllModules }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
