import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListItemsComponent } from './characters-list-items.component';

describe('CharactersListItemsComponent', () => {
  let component: CharactersListItemsComponent;
  let fixture: ComponentFixture<CharactersListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
