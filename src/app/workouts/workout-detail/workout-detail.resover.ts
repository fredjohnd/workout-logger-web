import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Workout } from './../../models/workout.model';
import { WorkoutService } from './../../services/workout.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDetailResolver implements Resolve<Workout> {

  constructor(
    private modelService: WorkoutService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Workout> {
    return new Observable(obs => {

      const statement = '';
      this.modelService.getItem(route.params.id).subscribe({
        next: (item: Workout) => {
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
