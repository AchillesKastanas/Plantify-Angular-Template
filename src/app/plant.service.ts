import { Injectable } from '@angular/core';
import { Plant } from './Plant';
import { PLANTS } from './mock-plants';

@Injectable({
  providedIn: 'root'//single instance
})
export class PlantService {

  constructor() { }

  getPlants(): Plant[] {
    return PLANTS;
  }
}
