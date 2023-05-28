import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mfenx-mand-badge-pill',
  templateUrl: './mand-badge-pill.component.html',
  styleUrls: ['./mand-badge-pill.component.scss'],
})
export class MandBadgePillComponent implements OnInit {
  @Input() public text: any ;
  @Input() public linkImage: any ;
  @Input() public type: any ;
  @Input() public fontStyle: any;

  // deployUrl = environment.deployUrl;
  constructor() { }

  ngOnInit(): void {
    console.log('')
  }
}
