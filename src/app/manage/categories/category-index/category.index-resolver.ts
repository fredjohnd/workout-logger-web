import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/category-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryIndexResolver implements Resolve<Array<Category>> {

  constructor(
    private modelService: CategoryService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Category>> {
    return new Observable(obs => {

      const statement = '';
      this.modelService.queryItems(statement).subscribe({
        next: (items: Array<Category>) => {
          obs.next(items);
          obs.complete();
        },
        error: () => {
          obs.next(null);
          obs.complete();
        }
      });
    });
  }
}
