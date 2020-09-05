import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Exercise } from '../models/exercise';

export const mockExercise1: Exercise = {
  id: 1,
  name: 'Bench Press',
  imageURL: 'https://place-hold.it/300x240',
};

export const mockExercise2: Exercise = {
  id: 2,
  name: 'Squats',
  imageURL: 'https://place-hold.it/300x240'
};

export const mockExercise3: Exercise = {
  id: 3,
  name: 'Back extension',
  imageURL: 'https://place-hold.it/300x240'
};

export const mockExercise4: Exercise = {
  id: 4,
  name: 'Bicep Curl',
  imageURL: 'https://place-hold.it/300x240'
};

export const mockExercise5: Exercise = {
  id: 5,
  name: 'Triceps extension',
  imageURL: 'https://place-hold.it/300x240'
};

export const mockExercise6: Exercise = {
  id: 6,
  name: 'Crunches',
  imageURL: 'https://place-hold.it/300x240',
};

export const mockExercise7: Exercise = {
  id: 7,
  name: 'Dumbell lunges',
  imageURL: 'https://place-hold.it/300x240',
};

export const mockExercise8: Exercise = {
  id: 8,
  name: 'Cable Chest Press',
  imageURL: 'https://place-hold.it/300x240',
};

export const mockExercises: Array<Exercise> = [
  mockExercise1,
  mockExercise2,
  mockExercise3,
  mockExercise4,
  mockExercise5,
  mockExercise6
];

@Injectable({
  providedIn: 'root'
})
export class ExerciseMockService {

  constructor() { }

  getItem(id: string): Observable<Exercise> {
    return of(mockExercises.find(x => x.id === +id));
  }

  queryItems(statement: string): Observable<Array<Exercise>> {
    return of (mockExercises);
  }

  createItem(item: Exercise): Observable<Exercise> {
    mockExercises.push(item);
    return of (item);
  }

  updateItem(item: Exercise): Observable<Exercise> {
    return of(item);
  }

  deleteItem(item: Exercise): Observable<null> {
    return of(null);
  }
}
