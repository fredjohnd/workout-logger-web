import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout.model';

@Component({
  selector: 'app-workout-index',
  templateUrl: './workout-index.component.html',
  styleUrls: ['./workout-index.component.scss']
})
export class WorkoutIndexComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  data: Workout[];

  ngOnInit(): void {
    const { data, queryParams } = this.route.snapshot;
    this.data = data.items;
  }

}
