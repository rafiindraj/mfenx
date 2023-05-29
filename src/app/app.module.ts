import { Component } from '@angular/core';
/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingComponent } from './landing/landing.component';
import { NavModule } from '@mfenx/nav';
import { PathLocationStrategy, LocationStrategy  } from '@angular/common';
import { FormSharedModule } from '../../projects/form/base-eform/src/app/app.module';
import { AdminSharedModule } from '../../projects/admin/base-desktop/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    NavModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: LandingComponent
    //   },
    //   {
    //     path: 'admin',
    //     loadChildren: () => import('../../projects/admin/base-desktop/src/app/app.module').then(m => m.AdminSharedModule),
    //   },
    //   {
    //     path: 'form',
    //     loadChildren: () => import('../../projects/form/base-eform/src/app/app.module').then(m => m.FormSharedModule),
    //   },
    //   {
    //     path: '',
    //     loadChildren: () => import('@mfenx/nav').then((m) => m.NavModule),
    //   },
    //   {
    //     path: '**',
    //     component: LandingComponent,
    //   },
    // ]),
  ],

  providers: [{provide : LocationStrategy , useClass: PathLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }


