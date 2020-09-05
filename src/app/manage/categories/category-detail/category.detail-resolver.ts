import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailResolver implements Resolve<Category> {

  constructor(
    private modelService: CategoryService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category> {
    return new Observable(obs => {

      this.modelService.getItem(route.params.id).subscribe({
        next: (item: Category) => {
          obs.next(item);
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
