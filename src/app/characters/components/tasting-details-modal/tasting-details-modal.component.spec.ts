import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingDetailsModalComponent } from './tasting-details-modal.component';

describe('TastingDetailsModalComponent', () => {
  let component: TastingDetailsModalComponent;
  let fixture: ComponentFixture<TastingDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastingDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastingDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
