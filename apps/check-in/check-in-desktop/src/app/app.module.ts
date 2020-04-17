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
            import('@patterns-example/check-in/check-in-feature-shell').then(
              module => module.CheckInFeatureShellModule
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
