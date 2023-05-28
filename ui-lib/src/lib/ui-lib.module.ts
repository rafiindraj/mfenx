import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
// import { HeadnavComponent } from './headnav/headnav.component';
// import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';
import { MandBadgeComponent } from './mand-badge/mand-badge.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent, CardComponent, MandBadgeComponent],
  exports: [BannerComponent, CardComponent],
})
export class UiLibModule {}
