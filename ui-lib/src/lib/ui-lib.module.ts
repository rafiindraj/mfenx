import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HeadnavComponent } from './headnav/headnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent, HeadnavComponent, SidenavComponent],
  exports: [BannerComponent, HeadnavComponent, SidenavComponent],
})
export class UiLibModule {}
