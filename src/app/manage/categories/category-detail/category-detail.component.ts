import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Category } from 'src/app/models/category.model';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  data: Category;
  exercises: Observable<Array<Exercise>>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const { data, queryParams } = this.route.snapshot;
    this.data = data.item;
  }

}
