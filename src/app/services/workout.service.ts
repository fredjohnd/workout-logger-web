import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from '../models/workout.model';
import { WorkoutMockService } from './workout-mock.service';

/**
 * Workout Service
 */
@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private mock: WorkoutMockService) { }

  getItem(id: string): Observable<Workout> {
    return this.mock.getItem(id);
  }

  queryItems(statement: string): Observable<Array<Workout>> {
    return this.mock.queryItems(statement);
  }

  createItem(item: Workout): Observable<Workout> {
    return this.mock.createItem(item);
  }

  updateItem(item: Workout): Observable<Workout> {
    return this.mock.updateItem(item);
  }

  deleteItem(item: Workout): Observable<null> {
    return this.mock.deleteItem(item);
  }
}
