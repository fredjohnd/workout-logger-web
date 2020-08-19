import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from '../models/category';

export const mockCategory1: Category = {
  id: 1,
  name: 'Chest'
};

export const mockCategory2: Category = {
  id: 2,
  name: 'Shoulders'
};

export const mockCategory3: Category = {
  id: 3,
  name: 'Legs'
};

export const mockCategories: Array<Category> = [mockCategory1, mockCategory2, mockCategory3];

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService {

  constructor() { }

  getItem(statement: string): Observable<Category> {
    return of(mockCategory1);
  }

  getItems(statement: string): Observable<Array<Category>> {
    return of (mockCategories);
  }

  createItem(item: Category): Observable<Category> {
    return of (mockCategory1);
  }

  updateItem(item: Category): Observable<Category> {
    return of(mockCategory1);
  }

  deleteItem(id: string): Observable<null> {
    return of(null);
  }
}
