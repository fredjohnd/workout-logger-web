import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Exercise } from './../../../models/exercise.model';
import { ExerciseService } from './../../../services/exercise.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseIndexResolver implements Resolve<Array<Exercise>> {

  constructor(
    private modelService: ExerciseService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Exercise>> {
    return new Observable(obs => {

      const statement = '';
      this.modelService.queryItems(statement).subscribe({
        next: (items: Array<Exercise>) => {
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
