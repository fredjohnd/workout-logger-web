import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../models/category.model';
import { CategoryMockService } from './category-mock.service';

/**
 * Category Service
 */
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private mock: CategoryMockService) { }

  getItem(id: string): Observable<Category> {
    return this.mock.getItem(id);
  }

  queryItems(statement: string): Observable<Array<Category>> {
    return this.mock.queryItems(statement);
  }

  createItem(item: Category): Observable<Category> {
    return this.mock.createItem(item);
  }

  updateItem(item: Category): Observable<Category> {
    return this.mock.updateItem(item);
  }

  deleteItem(item: Category): Observable<null> {
    return this.mock.deleteItem(item);
  }
}
