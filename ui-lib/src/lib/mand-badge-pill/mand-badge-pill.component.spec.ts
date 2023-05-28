import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MandBadgePillComponent } from './mand-badge-pill.component';

describe('MandBadgePillComponent', () => {
  let component: MandBadgePillComponent;
  let fixture: ComponentFixture<MandBadgePillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MandBadgePillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MandBadgePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
