import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadnavComponent } from './headnav/headnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeadnavComponent, SidenavComponent],
  exports: [HeadnavComponent, SidenavComponent],
})
export class NavModule {}
