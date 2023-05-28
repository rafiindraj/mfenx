import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingComponent } from './landing/landing.component';
import { NavModule } from '@mfenx/nav';
import { PillComponent } from './pill/pill.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LandingComponent,
    PillComponent,
  ],
  imports: [
    BrowserModule,
    NavModule,
    RouterModule.forRoot([
      {
        path: 'env.js',
        component: LandingComponent,
      },
      // {
      //   path: '',
      //   loadChildren: () => import('@mfenx/nav').then((m) => m.NavModule),
      // },
      // {
      //   path: '**',
      //   component: LandingComponent,
      // },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
