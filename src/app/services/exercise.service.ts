import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Exercise } from '../models/exercise.model';
import { ExerciseMockService } from './exercise-mock.service';

/**
 * Exercise Service
 */
@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private mock: ExerciseMockService) { }

  getItem(id: string): Observable<Exercise> {
    return this.mock.getItem(id);
  }

  queryItems(statement: string): Observable<Array<Exercise>> {
    return this.mock.queryItems(statement);
  }

  createItem(item: Exercise): Observable<Exercise> {
    return this.mock.createItem(item);
  }

  updateItem(item: Exercise): Observable<Exercise> {
    return this.mock.updateItem(item);
  }

  deleteItem(item: Exercise): Observable<null> {
    return this.mock.deleteItem(item);
  }
}
