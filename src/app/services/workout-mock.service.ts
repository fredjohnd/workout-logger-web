import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Workout } from '../models/Workout.model';

export const mockWorkout1: Workout = {
  id: '1',
  description: 'My First workout',
  startDateTime: new Date(2020, 8, 12, 16, 0),
  endDateTime: new Date(2020, 8, 12, 17, 15),
  plan: [
    {
      isCategory: true,
      categoryId: '1',
      exercises: [
        {
          id: 'ee03kvvv-0',
          exerciseId: '1',
          categoryId: '1',
          values: ['20x12', '30x10', '40x8']
        }
      ]
    }

  ]
};

export const mockWorkouts: Array<Workout> = [
  mockWorkout1,

];

@Injectable({
  providedIn: 'root'
})
export class WorkoutMockService {

  constructor() { }

  getItem(id: string): Observable<Workout> {
    return of(mockWorkouts.find(x => x.id === id));
  }

  queryItems(statement: string): Observable<Array<Workout>> {
    return of (mockWorkouts);
  }

  createItem(item: Workout): Observable<Workout> {
    mockWorkouts.push(item);
    return of (item);
  }

  updateItem(item: Workout): Observable<Workout> {
    return of(item);
  }

  deleteItem(item: Workout): Observable<null> {
    return of(null);
  }
}
