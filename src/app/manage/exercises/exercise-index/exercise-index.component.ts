import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Exercise } from 'src/app/models/exercise.model';
import { ExerciseMockService } from './../../../services/exercise-mock.service';

@Component({
  selector: 'app-exercise-index',
  templateUrl: './exercise-index.component.html',
  styleUrls: ['./exercise-index.component.scss']
})
export class ExerciseIndexComponent implements OnInit {

  data: Observable<Array<Exercise>>;

  constructor(private exerciseMockService: ExerciseMockService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const { data, queryParams } = this.route.snapshot;
    this.data = data.items;
  }

}
