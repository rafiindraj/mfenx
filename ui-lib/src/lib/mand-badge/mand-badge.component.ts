import { Component, Input, OnInit } from '@angular/core';
import { StyleType } from './model/mand-badge.model';

@Component({
  selector: 'mfenx-mand-badge',
  templateUrl: './mand-badge.component.html',
  styleUrls: ['./mand-badge.component.scss'],
})
export class MandBadgeComponent implements OnInit {
  @Input() type: StyleType | undefined ;

  styleClass = '';

  ngOnInit(): void {
    this.styleClass = 'badge-' + this.type;
  }
}
