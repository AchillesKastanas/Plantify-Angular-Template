import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../Plant';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {
plant: any;

  ngOnInit(): void{
    // @Input() plant: Plant;
  }
}
