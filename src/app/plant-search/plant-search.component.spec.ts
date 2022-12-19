import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSearchComponent } from './plant-search.component';

describe('PlantSearchComponent', () => {
  let component: PlantSearchComponent;
  let fixture: ComponentFixture<PlantSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
