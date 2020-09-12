import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from '../models/category.model';

export const mockCategory1: Category = {
  id: '1',
  name: 'Chest',
  exerciseIds: ['1', '8']
};

export const mockCategory2: Category = {
  id: '2',
  name: 'Back',
  exerciseIds: ['3']
};

export const mockCategory3: Category = {
  id: '3',
  name: 'Legs',
  exerciseIds: ['2', '7']
};

export const mockCategory4: Category = {
  id: '4',
  name: 'Biceps',
  exerciseIds: ['4']
};

export const mockCategory5: Category = {
  id: '5',
  name: 'Triceps',
  exerciseIds: ['5']
};
export const mockCategory6: Category = {
  id: '6',
  name: 'Abs',
  exerciseIds: ['6']
};

export const mockCategories: Array<Category> = [
  mockCategory1,
  mockCategory2,
  mockCategory3,
  mockCategory4,
  mockCategory5,
  mockCategory6,
];

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService {

  constructor() { }

  getItem(id: string): Observable<Category> {
    return of(mockCategories.find(x => x.id === id));
  }

  queryItems(statement: string): Observable<Array<Category>> {
    return of (mockCategories);
  }

  createItem(item: Category): Observable<Category> {
    mockCategories.push(item);
    return of (item);
  }

  updateItem(item: Category): Observable<Category> {
    return of(item);
  }

  deleteItem(item: Category): Observable<null> {
    return of(null);
  }
}
