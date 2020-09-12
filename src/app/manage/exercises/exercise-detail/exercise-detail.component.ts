import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit {

  data: Exercise;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const { data, queryParams } = this.route.snapshot;
    this.data = data.item;
  }

}
