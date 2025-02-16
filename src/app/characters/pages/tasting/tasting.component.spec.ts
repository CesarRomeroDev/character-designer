import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingComponent } from './tasting.component';

describe('TastingComponent', () => {
  let component: TastingComponent;
  let fixture: ComponentFixture<TastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
