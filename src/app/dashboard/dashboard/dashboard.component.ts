import { PlantService } from './../../plant.service';
import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/Plant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantService: PlantService){}

  ngOnInit(){
    this.getPlants();
  }

  getPlants(): void {
    this.plantService.getPlants()
      .subscribe(plants => this.plants = plants.slice(1,5));
  }
}
