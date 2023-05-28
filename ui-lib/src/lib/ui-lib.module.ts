import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
// import { HeadnavComponent } from './headnav/headnav.component';
// import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BannerComponent,
    CardComponent,
  ],
  exports: [BannerComponent, CardComponent],
})
export class UiLibModule {}
