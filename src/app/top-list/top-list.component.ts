import { Component, OnInit } from '@angular/core';
import { Plant } from '../Plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']

})
export class TopListComponent implements OnInit{
  // plant: Plant = { id: 1, name: 'Sansevieria Trifasciata'};
  plants!: Plant[];
  selectedPlant!: Plant;

  constructor(private plantService: PlantService){}

  ngOnInit(): void {
    this.getPlantsFromService();
    throw new Error('Method not implemented.');
  }

  onSelect(plant: Plant){
    this.selectedPlant = plant;
  }

  getPlantsFromService(): void{
    this.plantService.getPlants().subscribe(plants => this.plants = plants);
  }
}
