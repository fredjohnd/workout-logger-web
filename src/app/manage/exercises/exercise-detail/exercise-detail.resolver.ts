import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Exercise } from '../../../models/exercise';
import { ExerciseService } from '../../../services/exercise.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDetailResolver implements Resolve<Exercise> {

  constructor(
    private modelService: ExerciseService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Exercise> {
    return new Observable(obs => {

      this.modelService.getItem(route.params.id).subscribe({
        next: (item: Exercise) => {
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
