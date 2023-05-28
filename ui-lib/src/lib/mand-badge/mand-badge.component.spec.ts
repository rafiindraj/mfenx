import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MandBadgeComponent } from './mand-badge.component';

describe('MandBadgeComponent', () => {
  let component: MandBadgeComponent;
  let fixture: ComponentFixture<MandBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MandBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MandBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
