import { Workout } from './../../models/workout.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  data: Workout;

  ngOnInit(): void {
    const { data, queryParams } = this.route.snapshot;
    this.data = data.item;
  }

}
