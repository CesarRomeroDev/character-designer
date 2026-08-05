import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingListComponent } from './tasting-list.component';

describe('TastingListComponent', () => {
  let component: TastingListComponent;
  let fixture: ComponentFixture<TastingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TastingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
