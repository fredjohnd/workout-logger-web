import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Workout } from './../../models/workout.model';
import { WorkoutService } from './../../services/workout.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutIndexResolver implements Resolve<Array<Workout>> {

  constructor(
    private modelService: WorkoutService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Workout>> {
    return new Observable(obs => {

      const statement = '';
      this.modelService.queryItems(statement).subscribe({
        next: (items: Array<Workout>) => {
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
