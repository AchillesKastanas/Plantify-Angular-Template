import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plant } from './Plant';
@Injectable({
 providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const plants = [
        { id: 1, name: 'Sansevieria Trifasciata', image: 'https://airplants.gr/wp-content/uploads/2019/06/IMG_0951-n.jpg' },
        { id: 2, name: 'ZZ Plant', image: 'https://www.kipogeorgiki.gr/image/cache/data/FYT_Esoterikou/Zamia%20Zamioculcas/1.-Zamioculcas-zamiifolia-1500x1500.jpg' },
        { id: 3, name: 'Burgundy Rubber Tree', image: 'http://mobileimages.lowes.com/productimages/4d937e6a-6815-4fc1-8f5d-f3c4d89a032a/09848890.jpg' },
        { id: 4, name: 'Ficus Alii', image: 'https://airplants.gr/wp-content/uploads/2020/04/ficus-alii-site.jpg' },
        { id: 5, name: 'Euphorbia Ammak', image: 'https://i.etsystatic.com/20034067/r/il/ff969a/1852472466/il_fullxfull.1852472466_m4eb.jpg' },
        { id: 6, name: 'Echeveria', image: 'https://i.etsystatic.com/17229952/r/il/8c35ab/3495384678/il_500x500.3495384678_9juq.jpg' },
        { id: 7, name: 'Satin Pothos', image: 'https://thebaghstore.com/wp-content/uploads/2021/03/MIGT9208.jpg' },
        { id: 8, name: 'Calathea Ornata', image: 'https://www.gardenersdream.co.uk/images/calathea-ornata-p4687-37243_zoom.jpg' },
        { id: 9, name: 'Tillandsia Xerographica', image: 'https://cdn.shopify.com/s/files/1/0464/9546/5632/products/Airplant_002.png?v=1623304367' },
        { id: 10, name: 'Bird of Paradise', image: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_bird-of-paradise_large_upcycled_stonewash.jpg?v=1660319820' }
      ]
      return {plants};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(plants: Plant[]): number {
      return plants.length > 0 ? Math.max(...plants.map(plant => plant.id)) + 1 : 11;
  }
}
