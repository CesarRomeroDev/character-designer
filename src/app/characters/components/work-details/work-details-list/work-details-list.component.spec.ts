import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailsListComponent } from './work-details-list.component';

describe('WorkDetailsListComponent', () => {
  let component: WorkDetailsListComponent;
  let fixture: ComponentFixture<WorkDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkDetailsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
