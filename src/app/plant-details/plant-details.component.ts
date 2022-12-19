import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../Plant';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {

  @Input() plant!: Plant;

  constructor(private route: ActivatedRoute, private plantService: PlantService, private location: Location) {}

  ngOnInit(): void{
    this.getPlant();
  }

  getPlant(): void {
    const stringId = this.route.snapshot.paramMap.get('id');
    const id = stringId? +stringId: 0;
    this.plantService.getPlant(id).subscribe(plant => this.plant = plant);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.plantService.updatePlant(this.plant)
    .subscribe(() => this.goBack()); }
}
