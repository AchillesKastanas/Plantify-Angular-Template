import { PlantService } from './../plant.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Plant } from '../Plant';

@Component({
  selector: 'app-plant-search',
  templateUrl: './plant-search.component.html',
  styleUrls: [ './plant-search.component.css' ]
})

export class PlantSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  plants$?: Observable<Plant[]>;

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plants$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.plantService.searchPlants(term)),
    );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
