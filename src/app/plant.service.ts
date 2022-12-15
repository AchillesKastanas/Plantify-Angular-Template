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
    this.messagingService.add('PlantService: fetched all plants');
    return of(PLANTS);
  }
}
