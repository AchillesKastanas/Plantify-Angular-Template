import { Component, OnInit } from '@angular/core';
import { Plant } from '../Plant';
import { PlantService } from '../plant.service';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']

})
export class TopListComponent implements OnInit{
  // plant: Plant = { id: 1, name: 'Sansevieria Trifasciata'};
  plants!: Plant[];
  selectedPlant!: Plant;

  constructor(private plantService: PlantService, private messagingService: MessagingService){}

  ngOnInit(): void {
    this.getPlantsFromService();
  }

  getPlantsFromService(): void{
    this.plantService.getPlants().subscribe(plants => this.plants = plants);
  }
}
