import { Injectable } from '@angular/core';
import { Plant } from './Plant';
import { PLANTS } from './mock-plants';
import { Observable, of } from 'rxjs';
import { MessagingService } from './messaging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'//single instance
})
export class PlantService {
    private plantsUrl = 'api/plants'; // URL to web api
    httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json' }) };

    constructor(private http: HttpClient, private messagingService: MessagingService) { }

    getPlants(): Observable<Plant[]> {
        //this.messagingService.add('PlantService: fetched plants ');
        return this.http.get<Plant[]>(this.plantsUrl)
          .pipe( tap(_ => this.log('fetched plants')),
          catchError(this.handleError<Plant[]>('getPlants',
        [])) );
    }

    getPlant(id: number): Observable<Plant> {
        const url = `${this.plantsUrl}/${id}`;
        return this.http.get<Plant>(url).pipe( tap(_ =>
          this.log(`fetched plant id=${id}`)),
          catchError(this.handleError<Plant>(`getPlantid=${id}`)) );
    }

    private log(message: string) {
        this.messagingService.add(`PlantService: ${message}`);
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    updatePlant(plant: Plant): Observable<any> {
      return this.http.put(this.plantsUrl, plant,
      this.httpOptions).pipe(
      tap(_ => this.log(`updated plant id=${plant.id}`)),
      catchError(this.handleError<any>('updatePlant')) );
    }

    addPlant(plant: Plant): Observable<Plant> {
      return this.http.post<Plant>(this.plantsUrl, plant, this.httpOptions).pipe(
        tap((newPlant: Plant) => this.log(`added plant w/ id=${newPlant.id}`)),
        catchError(this.handleError<Plant>('addPlant')) );
    }

    deletePlant(plant: Plant | number): Observable<Plant> {
      const id = typeof plant === 'number' ? plant : plant.id;
      const url = `${this.plantsUrl}/${id}`;
      return this.http.delete<Plant>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted plant id=${id}`)),
        catchError(this.handleError<Plant>('deletePlant')) );
    }

    searchPlants(term: string): Observable<Plant[]> {
      if (!term.trim()) return of([]);

      return this.http.get<Plant[]>(`${this.plantsUrl}/?name=${term}`).pipe(
        tap(x => x.length ? this.log(`found plants matching "${term}"`) : this.log(`no plants matching "${term}"`)),
        catchError(this.handleError<Plant[]>('searchPlants', []))
      );
    }
}
