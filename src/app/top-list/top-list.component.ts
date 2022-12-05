import { Component, OnInit } from '@angular/core';
import { Plant } from '../Plant';
import { PLANTS } from '../mock-plants';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']

})
export class TopListComponent implements OnInit{
  plant: Plant = { id: 1, name: 'Sansevieria Trifasciata'};
  plants = PLANTS;
  selectedPlant!: Plant;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSelect(plant: Plant){
    this.selectedPlant = plant;
  }
}
