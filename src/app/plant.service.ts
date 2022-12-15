import { Injectable } from '@angular/core';
import { Plant } from './Plant';
import { PLANTS } from './mock-plants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'//single instance
})
export class PlantService {

  constructor() { }

  getPlants(): Observable<Plant[]> {
    return of(PLANTS);
  }
}
