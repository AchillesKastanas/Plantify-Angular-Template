import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDetailsComponent } from './plant-details.component';

describe('PlantDetailsComponent', () => {
  let component: PlantDetailsComponent;
  let fixture: ComponentFixture<PlantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
