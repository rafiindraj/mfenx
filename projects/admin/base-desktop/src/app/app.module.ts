import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavModule } from '@mfenx/nav';
// import { AppRoutingModule } from './app.routes';
const providers : any = []
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    NavModule,
    // AppRoutingModule
    RouterModule.forRoot(appRoutes, { initialNavigation: 'disabled' }),
  ],
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
@NgModule({})
export class AdminSharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}