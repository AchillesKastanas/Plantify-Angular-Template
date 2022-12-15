import { Injectable } from '@angular/core';
import { Plant } from './Plant';
import { PLANTS } from './mock-plants';
import { Observable, of } from 'rxjs';
import { MessagingService } from './messaging.service'

@Injectable({
  providedIn: 'root'//single instance
})
export class PlantService {

  constructor(private messagingService: MessagingService) { }

  getPlants(): Observable<Plant[]> {
    this.messagingService.add('PlantService: fetched plants ');
    return of(PLANTS);
  }

  getPlant(id: number): Observable<Plant> {
    console.log(id);
    this.messagingService.add('PlantService: added plant with id=' + id);
    return of(PLANTS.find(plant => plant.id === id) || {} as Plant);
  }
}
